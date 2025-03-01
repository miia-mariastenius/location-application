import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./config";

export function useFireLocations(){
  const [locations, setLocations] = useState([])

  useEffect ( () => {
    const q = query(collection(db, LOCATIONS_REF))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setLocations(
        querySnapshot.docs.map((doc) => {
          const data = doc.data()

          const coords = data.coords ? {
            lat: data.coords.latitude, 
            lon: data.coords.longitude
          } : { lat: 0, lon: 0 }

          return { id: doc.id, ...data, coords }
        })
      )
    })

    return () => unsubscribe()
  }, [])

  return locations
}