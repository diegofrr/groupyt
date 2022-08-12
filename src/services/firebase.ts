import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIrGq_EC5Q3twIK8KxnF31NQ-IyCDyEXI",
  authDomain: "groupyt-accb7.firebaseapp.com",
  projectId: "groupyt-accb7",
}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;