
import firebase from 'firebase/app';
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9TaKRR-WgmnMCW6PZgTzCgenXEHwnnK0",
//   authDomain: "ignw-code-challenge.firebaseapp.com",
//   databaseURL: "https://ignw-code-challenge-default-rtdb.firebaseio.com",
//   projectId: "ignw-code-challenge",
//   storageBucket: "ignw-code-challenge.appspot.com",
//   messagingSenderId: "771877351042",
//   appId: "1:771877351042:web:508f1a969626d9b7078e9b",
//   measurementId: "G-FYB0TZGLKZ"
// };
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "ignw-code-challenge",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

if (window.location.hostname.includes('localhost')) {
  firestore.useEmulator('localhost', 8080 )
}

  
export default firebase;