import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
{
    apiKey: "AIzaSyB9KzJIDOwLfPi98aMlSc8y5lsZJc2Iq7U",
    authDomain: "reactproject2-48da1.firebaseapp.com",
    databaseURL: "https://reactproject2-48da1.firebaseio.com",
    projectId: "reactproject2-48da1",
    storageBucket: "reactproject2-48da1.appspot.com",
    messagingSenderId: "424552672559",
    appId: "1:424552672559:web:3a38f9e46c7b26d2e845da",
    measurementId: "G-CQ635H8H91",
}
);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};