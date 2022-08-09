import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
