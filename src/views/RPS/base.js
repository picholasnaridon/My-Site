import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "rock-paper-scissors-46edf.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-46edf.firebaseio.com",
    projectId: "rock-paper-scissors-46edf",
    storageBucket: "",
    messagingSenderId: "636808734706"
  };

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export { base, app}