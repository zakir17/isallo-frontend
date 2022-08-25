import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_NtNPWRvy474rr6x8b9YbY3BAKSzhfYQ",
  authDomain: "isallo.firebaseapp.com",
  projectId: "isallo",
  storageBucket: "isallo.appspot.com",
  messagingSenderId: "785633951842",
  appId: "1:785633951842:web:aa0715b1b5e3df0b09913b",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
