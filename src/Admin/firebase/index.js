import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjI0UX4hm-s4j5dzgke0y21Q-Tl4pJILY",
  authDomain: "final-project-90133.firebaseapp.com",
  projectId: "final-project-90133",
  storageBucket: "final-project-90133.appspot.com",
  messagingSenderId: "27168146635",
  appId: "1:27168146635:web:13af83b88e081ee51b474e",
  measurementId: "G-2VYMQ0L1QM",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
