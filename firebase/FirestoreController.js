import { addDoc, collection, GeoPoint, serverTimestamp } from "firebase/firestore";
import { auth, db, LOCATIONS_REF, USERS_REF } from "./config";

// export function useFireLocations(){
//   const [locations, setLocations] = useState([])

//   useEffect ( () => {
//     const q = query(collection(db, LOCATIONS_REF), orderBy("timestamp", "desc"))

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       setLocations(
//         querySnapshot.docs.map((doc) => {
//           const data = doc.data()

//           const coords = data.coords ? {
//             lat: data.coords.latitude, 
//             lon: data.coords.longitude
//           } : { lat: 0, lon: 0 }

//           return { id: doc.id, ...data, coords }
//         })
//       )
//     })

//     return () => unsubscribe()
//   }, [])

//   return locations
// }

export async function addLocation({ name, description, rating, latitude, longitude }) {
  const locationData = {
    name,
    description,
    rating,
    coords: new GeoPoint(latitude, longitude),
    timestamp: serverTimestamp(),
  }

  const subColRef = collection(db, USERS_REF, auth.currentUser.uid, LOCATIONS_REF)
  await addDoc(subColRef, locationData)
    .then(() => {
      console.log('Location added!')
    })
    .catch(error => console.log(error.message))
}