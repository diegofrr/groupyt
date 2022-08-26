import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcMN4HvVavLh1-Vri2A75NJHsP_BvrlVw",
  authDomain: "groupyt-14d60.firebaseapp.com",
  projectId: "groupyt-14d60",
}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;