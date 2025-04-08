import * as firebase from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyB0Ag1Lh3WVEey8dHqrjxXEJhAPXENOuvk",
  authDomain: "todo-app-309e2.firebaseapp.com",
  projectId: "todo-app-309e2",
  storageBucket: "todo-app-309e2.firebasestorage.app",
  messagingSenderId: "110589561752",
  appId: "1:110589561752:web:88fc861f7536b6f32af9ed",
  measurementId: "G-DN1SPN73YL"
};

const fbApp = firebase.initializeApp(firebaseConfig);
export default fbApp;
