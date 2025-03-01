import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./config";

export function useFireLocations(){
  const [locations, setLocations] = useState([])

  useEffect ( () => {

    const q = query(collection(db, LOCATIONS_REF))

    onSnapshot(q, querySnapshot => {
      querySnapshot.docs.forEach(d => {
        console.log(d.id)        
      })
    })

  }, [])

  return locations
}