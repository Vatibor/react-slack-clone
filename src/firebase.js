import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKU9IBlDyBielS8ktLiqBUd8QTKhCmi7Y",
    authDomain: "react-slack-clone-aa674.firebaseapp.com",
    projectId: "react-slack-clone-aa674",
    storageBucket: "react-slack-clone-aa674.appspot.com",
    messagingSenderId: "806737066034",
    appId: "1:806737066034:web:bb50046bf462848839642b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };