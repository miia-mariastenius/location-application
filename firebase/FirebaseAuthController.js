import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db, LOCATIONS_REF, USERS_REF } from "./config";
import { collection, onSnapshot } from "firebase/firestore";

export function useFireAuth() {
  const [user, setUser] = useState()
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        const subColRef = collection(db, USERS_REF, user.uid, LOCATIONS_REF)
        const unsubscribeLocations = onSnapshot(subColRef, (querySnapshot) => {
          const fetchedLocations = querySnapshot.docs.map((doc) => {
            const data = doc.data()

            const coords = data.coords
              ? {
                  lat: data.coords.latitude,
                  lon: data.coords.longitude,
                }
              : { lat: 0, lon: 0 }

            return { id: doc.id, ...data, coords }
          })
          //console.log("Fetched locations:", fetchedLocations)
          setLocations(fetchedLocations)
        })

        return () => unsubscribeLocations()
      }
    })

    return () => unsubscribeAuth()
  }, [])

  return [user, locations]
}

export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    return error.message
  }
  return null
}

export function logoutUser() {
  signOut(auth)
    .catch(error => console.log(error.message))
}