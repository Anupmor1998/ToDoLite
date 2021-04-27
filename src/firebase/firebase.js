import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBlOP0hTw33HhWYRWPrrsGgE4b5OgmLQsA",
  authDomain: "todoapp-3d854.firebaseapp.com",
  projectId: "todoapp-3d854",
  storageBucket: "todoapp-3d854.appspot.com",
  messagingSenderId: "68390300234",
  appId: "1:68390300234:web:50fed38ececd498a1114b3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
export { db, timestamp, auth };
