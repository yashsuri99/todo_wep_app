// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdM7r_bPNpPYMfg1YlwcwJ17GDnCLy9A4",
    authDomain: "todo-app-cp-7bc1d.firebaseapp.com",
    projectId: "todo-app-cp-7bc1d",
    storageBucket: "todo-app-cp-7bc1d.appspot.com",
    messagingSenderId: "95922822386",
    appId: "1:95922822386:web:749938b636e6889e86446b",
    measurementId: "G-Z3XSFBEGH5"    
}) 

const db = firebaseApp.firestore();

export default db;