require('dotenv').config();
const express = require('express');
const app = express();
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

app.get('/', (req, res) => {
  console.log("WTF");
  res.send("WTF");
  //Insert key,value pair to database
  firebase.database().ref('/newTest').set({TestMessage: 'Process env working?'});
});

app.put('/', (req, res) => {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
});

app.post('/', (req, res) => {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");
});

app.delete('/', (req, res) => {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

const server = app.listen(8080, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log("Gogot listening at http://%s:%s", host, port);
});





// const firebaseConfig = {
//     apiKey: "AIzaSyAqMdz7sy9pwS4Da96_P6MuIhqX-DhePvY",
//     authDomain: "gogot-f58ec.firebaseapp.com",
//     databaseURL: "https://gogot-f58ec.firebaseio.com",
//     projectId: "gogot-f58ec",
//     storageBucket: "gogot-f58ec.appspot.com",
//     messagingSenderId: "436337583391"
// };
