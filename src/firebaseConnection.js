import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAOee-NqChuad7J0QOJd09L1bAcBjDM_g",
  authDomain: "cursoreact-4949f.firebaseapp.com",
  projectId: "cursoreact-4949f",
  storageBucket: "cursoreact-4949f.appspot.com",
  messagingSenderId: "520592573236",
  appId: "1:520592573236:web:e832b6b0a25ff412855b61",
  measurementId: "G-0EFMB5RTFL"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);  
}

export default firebase;