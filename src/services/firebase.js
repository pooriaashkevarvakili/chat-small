import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAwar74yQykKaKkBvkQhntNaDDMwHsQcU8",
    authDomain: "chat-4d70c.firebaseapp.com",
    projectId: "chat-4d70c",
    storageBucket: "chat-4d70c.appspot.com",
    messagingSenderId: "207542966904",
    appId: "1:207542966904:web:291c5570ac1c9436732b8d",
    measurementId: "G-GTH9NL5HCQ"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);
export default firebaseapp;