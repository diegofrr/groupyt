import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0X7DiWKaZhdfIU5pb2OmzvFfx96GhzBY",
  authDomain: "groupyt-ffc60.firebaseapp.com",
  projectId: "groupyt-ffc60",
}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;