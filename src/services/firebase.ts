import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK5q_KxYikG2NUBCYbDb5d-vdUSTyLQ1U",
  authDomain: "groupyt-89b32.firebaseapp.com",
  projectId: "groupyt-89b32",
}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;