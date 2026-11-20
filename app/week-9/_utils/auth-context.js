// Name: Alex Ghebremicael Assignment 9

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  // null until somebody signs in
  const [user, setUser] = useState(null);

  // I open the GitHub popup and let Firebase do the sign in
  function gitHubSignIn() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // I sign the current user out
  function firebaseSignOut() {
    return signOut(auth);
  }

  useEffect(() => {
    // Firebase calls this whenever the sign in state changes, so my user state keeps up
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // stop listening when this provider leaves the page
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// my pages call this hook to get the user and the two functions
export function useUserAuth() {
  return useContext(AuthContext);
}
