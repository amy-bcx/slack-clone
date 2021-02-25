import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUOMbMDhLLdBEHE5BaXfg4KTLtGWumT14",
    authDomain: "slack-clone-aeb78.firebaseapp.com",
    projectId: "slack-clone-aeb78",
    storageBucket: "slack-clone-aeb78.appspot.com",
    messagingSenderId: "752306701725",
    appId: "1:752306701725:web:4c93212238703ed8431b74",
    measurementId: "G-EBGSXV5X1M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;