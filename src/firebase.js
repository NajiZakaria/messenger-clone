import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiX3ng0Za656JOkiL7aNzbq_9wihgKADg",
    authDomain: "messenger-clone-d1842.firebaseapp.com",
    databaseURL: "https://messenger-clone-d1842.firebaseio.com",
    projectId: "messenger-clone-d1842",
    storageBucket: "messenger-clone-d1842.appspot.com",
    messagingSenderId: "661454966076",
    appId: "1:661454966076:web:8812a064e0169e1dde2239",
    measurementId: "G-TDM5C56XCF"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();


  export default  db;