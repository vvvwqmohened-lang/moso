// ========== إعدادات Firebase ==========
const firebaseConfig = {
    apiKey: "AIzaSyBygVOgLelAsR0k0MiH6CoQAAuVPKX", // استبدل
     authDomain: "myproject-b6353.firebaseapp.com", 
     projectId: "myproject-b6353",
     storageBucket: "myproject-b6353.firebasestorage.app",
     messagingSenderId: "339621647444",
     appId: "1:339621647444:web:8e0becdac3a46350d549c1"
  };

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
