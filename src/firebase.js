import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK8GhZJH65EhwwbaR0w62pyAetoPY2gC0",
    authDomain: "vue-crud1-5f05c.firebaseapp.com",
    databaseURL: "https://vue-crud1-5f05c.firebaseio.com",
    projectId: "vue-crud1-5f05c",
    storageBucket: "vue-crud1-5f05c.appspot.com",
    messagingSenderId: "335151664388",
    appId: "1:335151664388:web:37246bae38d8c6b0a7d451"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

