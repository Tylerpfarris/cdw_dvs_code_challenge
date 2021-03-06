
import firebase from 'firebase/app';
import "firebase/firestore";

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