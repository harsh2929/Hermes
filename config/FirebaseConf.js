import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "",  //add api
  authDomain: "",
  databaseURL:
    "https://chatzz-fa52b-default-rtdb.firebaseio.com",
  projectId: "chatzz-fa52b",
  storageBucket: "chatzz-fa52b.appspot.com",
  messagingSenderId: "",
  appId: "",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const storage = firebase.storage();

export { storage };
