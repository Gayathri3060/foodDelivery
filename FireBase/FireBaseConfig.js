import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDq6vE-3pL2YJU0Ew_qR3D32HmVeQHJvxU",
  authDomain: "foodapp-a3b42.firebaseapp.com",
  projectId: "foodapp-a3b42",
  storageBucket: "foodapp-a3b42.appspot.com",
  messagingSenderId: "919465842001",
  appId: "1:919465842001:web:c9ae2286ef66853e252f70"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app()
}
export {firebase}