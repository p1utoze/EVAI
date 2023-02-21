import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDZHQIS7Z7eW46aHB1f8DDMBRxDlJZPRT4",
//   authDomain: "rpaproject-ad0f4.firebaseapp.com",
//   projectId: "rpaproject-ad0f4",
//   storageBucket: "rpaproject-ad0f4.appspot.com",
//   messagingSenderId: "167376089804",
//   appId: "1:167376089804:web:5e1713a3e19caa9f6e8869",
//   measurementId: "G-J8JEX8M5L2"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBLYEdWAg1298YlqUyjdM3cIW_unmnSeXg",
  authDomain: "evaint-rpa.firebaseapp.com",
  projectId: "evaint-rpa",
  storageBucket: "evaint-rpa.appspot.com",
  messagingSenderId: "883494467733",
  appId: "1:883494467733:web:b3885b72fd03b23cb1039c",
  measurementId: "G-0VTMGFR1DW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const googleSignInButton = document.getElementById('google__btn');
const signout = document.querySelector('ul > li[id]');
const auth = getAuth(app);

auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

function myfunc()
{  
  window.location.href = "https://www.google.com"
}


googleSignInButton.addEventListener('click', () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('Authenticated successfully: '+ user.window)
    console.log('Signed in as: '+ user.displayName);
    window.location.href = 'event.html';
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
signout.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('Signed Out!');
    window.location.replace('index.html');
  }).catch((error) => {
      console.log(error);
  });
});
});