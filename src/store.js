import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyCQyYeuAe3FRWzrkW_QeoJ1njHM60CoSbk",
  authDomain: "react-ben-clientpanel.firebaseapp.com",
  databaseURL: "https://react-ben-clientpanel.firebaseio.com",
  projectId: "react-ben-clientpanel",
  storageBucket: "react-ben-clientpanel.appspot.com",
  messagingSenderId: "127653171263"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true //Firestore for Profile instead of Realtime Db
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
