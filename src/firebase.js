import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB4CXWDFWBNKE3-lJd-QgH9Y90rY2mtpjw",
    authDomain: "linkedin-clone-4182c.firebaseapp.com",
    projectId: "linkedin-clone-4182c",
    storageBucket: "linkedin-clone-4182c.appspot.com",
    messagingSenderId: "998149428121",
    appId: "1:998149428121:web:1c6e4b71a5428ba724b908"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth  = firebase.auth();

  export {db, auth};