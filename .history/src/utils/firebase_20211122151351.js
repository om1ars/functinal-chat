import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDOVdwFFjmNLjLElqDPkhoxKA8kFI-RYg4",
  authDomain: "whatsapp-4c106.firebaseapp.com",
  projectId: "whatsapp-4c106",
  storageBucket: "whatsapp-4c106.appspot.com",
  messagingSenderId: "294666875344",
  appId: "1:294666875344:web:44ea1386fb6590f9c5c9d5",
};



const app =  firebase.initalizeApp(firebaseConfig)
const db = 