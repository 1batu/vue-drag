import { initializeApp } from "firebase/firebase";

const app = initializeApp({
  //Google Api
});

export const db = app.database();
export const namesRef = db.ref("todos");
