import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { FormControl, Button, InputLabel, Input } from '@mui/material';
import db from './Firebase'
import firebase from '@firebase/app-compat';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    })
  }, [])
  

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        <Button variant="contained" color="primary" disabled={!input} type="submit" onClick={addTodo}>Add Todo</Button>
        {/* <button disabled={!input} type="submit" onClick={addTodo}>Add todo</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
