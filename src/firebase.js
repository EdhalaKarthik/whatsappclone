import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAiwVS_r28beW4RcT1vxK0GyuX8ujI6bH4",
    authDomain: "whats-app-clone-c8bd4.firebaseapp.com",
    projectId: "whats-app-clone-c8bd4",
    storageBucket: "whats-app-clone-c8bd4.appspot.com",
    messagingSenderId: "708970837752",
    appId: "1:import firebase from 'firebase/compat/app';708970837752:web:eb6fe6e7362ad905a7ad0d",
    measurementId: "G-XG22N5MLMZ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;