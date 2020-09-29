import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAXNRU3HDhS6R0rhPZxNuPFcQelyPQMZw",
  authDomain: "instagram-clonerfce.firebaseapp.com",
  databaseURL: "https://instagram-clonerfce.firebaseio.com",
  projectId: "instagram-clonerfce",
  storageBucket: "instagram-clonerfce.appspot.com",
  messagingSenderId: "388183285769",
  appId: "1:388183285769:web:69f29f67b48e7c75bed8d8",
  measurementId: "G-RV4BEVNK0S",
})

const db = firebaseApp.firestore()

export default db
