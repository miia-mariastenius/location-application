import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./config";

export function useFireAuth(){
  const [user, setUser] = useState()

  useEffect(()=>{
    onAuthStateChanged(auth, user => setUser(user))
  }, [])

  return user
}

// export function signUpUser(email, password){
//   createUserWithEmailAndPassword(auth, email, password)
//     .catch(error => console.log(error.message))
// }

export async function loginUser(email, password){
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    return error.message
  }
  return null
}

export function logoutUser(){
  signOut(auth)
    .catch(error => console.log(error.message))
}