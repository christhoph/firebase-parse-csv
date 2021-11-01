const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore/lite");

require("dotenv").config();

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;

const config = {
  apiKey: process.env.FIREBASE_SECRET_API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
};

const app = initializeApp(config);

const db = getFirestore(app);

const testCollection = collection(db, "test");

const addUser = (data, state = "active") => {
  const user = {
    ...data,
    state,
  };

  addDoc(testCollection, user);
};

module.exports = {
  app,
  db,
  addUser,
};
