$(document).ready(() => {
  const firebaseConfig = {
      apiKey: "AIzaSyAqMdz7sy9pwS4Da96_P6MuIhqX-DhePvY",
      authDomain: "gogot-f58ec.firebaseapp.com",
      databaseURL: "https://gogot-f58ec.firebaseio.com",
      projectId: "gogot-f58ec",
      storageBucket: "gogot-f58ec.appspot.com",
      messagingSenderId: "436337583391"
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  //TODO: Add in form validation
  //TODO: Add global state to manage users as the traverse the app
  //TODO: Add check to ensure that emails are not duplicated

  const getUsers = () => {
    let users = [];
    firestore.collection(`users`).get().then(docs => {
      docs.forEach(doc => {
        console.log(doc.data());
        users.push(doc.data())
        })
      }
    ).catch(err => {
      console.log("error", err);
    })
    return users;
  }

  $("#whoDis").on("click", e => {
        e.preventDefault();
        getUsers();
    });

  $("#submitUserInfo").on("click", e => {
        e.preventDefault();
        const fullName = $('#inputName').val();
        const email = $('#inputEmail').val();
        const poolEntries = $('#poolEntries').val();
        const userRef = firestore.doc(`users/${email}`);
        userRef.set({
          fullName,
          email,
          poolEntries
        }).then(() => {
          console.log("Success");
        }).catch(err => {
          console.log("Error", err);
        })
    });



});
