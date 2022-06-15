import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import db from './Firebase'
import "./Todo.css"

function Todo(props) {
  return (
    <List className="todo__list">
        <ListItem>
            <ListItemText primary={props.todo.todo} secondary='dummy text'></ListItemText>
        </ListItem>
        <Button variant="contained" color="error" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
    </List>
    // <li>{props.text}</li>
  )
}

export default Todo