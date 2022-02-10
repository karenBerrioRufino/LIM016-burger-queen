// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOT3SeWGapE4JLQ0ab7hs7Lbn9VkaQFFw',
  authDomain: 'burguerqueen-baebc.firebaseapp.com',
  projectId: 'burguerqueen-baebc',
  storageBucket: 'burguerqueen-baebc.appspot.com',
  messagingSenderId: '887882315276',
  appId: '1:887882315276:web:7cf89ce6132f8782872029',
  measurementId: 'G-VGGJH7QGR5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // para inicializar la fn auth

export {
  app,
  analytics,
  auth,
};
