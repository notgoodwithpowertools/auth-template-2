import firebase from 'firebase';

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
// console.log("authDomain", process.env.REACT_APP_AUTH_DOMAIN);

// var config = (process.env.NODE_ENV === 'development') ? {
//   apiKey: 'AIzaSyAF5pJIIeGCnKGM2GZKDga2DuJg2aeEp-4',
//   authDomain: 'footytips-dev.firebaseapp.com',
//   databaseURL: 'https://footytips-dev.firebaseio.com',
//   storageBucket: 'footytips-dev.appspot.com',
//   messagingSenderId: '189591411481'
// } : {
//   apiKey: 'AIzaSyAAiEJppMmrMwe32hA9qNKial-cqJOhk9c',
//   authDomain: 'footytips-prod.firebaseapp.com',
//   databaseURL: 'https://footytips-prod.firebaseio.com',
//   storageBucket: 'footytips-prod.appspot.com',
//   messagingSenderId: '688108608555'
// }
// try {
//
//   console.log("Firebase config:", config);
//   firebase.initializeApp(config);
//
// } catch (e) {
//
// }


// Firestore
var config = (process.env.NODE_ENV === 'development') ? {
  apiKey: "AIzaSyD3nuoNJHlZHVdYDhM607iPDGgv24Y7wxw",
  authDomain: "fstore1-dev.firebaseapp.com",
  databaseURL: "https://fstore1-dev.firebaseio.com",
  projectId: "fstore1-dev",
  storageBucket: "fstore1-dev.appspot.com",
  messagingSenderId: "1031943081436"
} : {
  apiKey: "AIzaSyD3nuoNJHlZHVdYDhM607iPDGgv24Y7wxw",
  authDomain: "fstore1-dev.firebaseapp.com",
  databaseURL: "https://fstore1-dev.firebaseio.com",
  projectId: "fstore1-dev",
  storageBucket: "fstore1-dev.appspot.com",
  messagingSenderId: "1031943081436"
}

try {

  console.log("Firestore config:", config);
  firebase.initializeApp(config);

} catch (e) {

}

// const settings = {/* your settings... */ timestampsInSnapshots: true};
// let firestoreDB = firebase.firestore();
// firestoreDB.settings(settings);
// export {firestoreDB};

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef = firebase.database().ref();
export var firebaseStorageRef = firebase.storage().ref();
export default firebase;
