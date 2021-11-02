const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
} = require("firebase/firestore/lite");

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
const subCollection = collection(
  doc(db, "cycles", "SMOh2eLp8Cv7vylKlvQj"),
  "candidates"
);

const addUser = (data, group = "independent") => {
  const user = {
    ...data,
    group,
  };

  addDoc(testCollection, user);
};

module.exports = {
  app,
  db,
  addUser,
};
