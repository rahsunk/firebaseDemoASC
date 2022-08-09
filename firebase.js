import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, //to get our database from firebase
  ref, //gives us specific references in our databases
  push, //creates a new location in a given reference
  set, //adds data to our database
  onValue, //reads data from our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDtyRzkc9Xrnl2z7I4T4E13V4yOrvo2z_c",
  authDomain: "fir-demo-45e13.firebaseapp.com",
  projectId: "fir-demo-45e13",
  storageBucket: "fir-demo-45e13.appspot.com",
  messagingSenderId: "79112646637",
  appId: "1:79112646637:web:2c5484927dbe2d371101e4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
