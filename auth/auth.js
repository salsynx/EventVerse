// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCzBInzu6CYO7SyMFWjw7YHhKDCmxeJ688",
    authDomain: "eventx-tm-hackattack.firebaseapp.com",
    projectId: "eventx-tm-hackattack",
    storageBucket: "eventx-tm-hackattack.appspot.com",
    messagingSenderId: "128226433491",
    appId: "1:128226433491:web:089d250300b3988cdeb726"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

