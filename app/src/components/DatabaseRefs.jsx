import { useAuth } from "../contexts/AuthContext";
import { firestoreDB } from "../firebase";

const DatabaseRefs = () => {
  const { currentUser } = useAuth();

  const watchListMoviesFirestoreRef = firestoreDB
    .collection("WatchList")
    .doc(currentUser.uid)
    .collection(currentUser.uid);

  const favoriteMoviesFirestoreRef = firestoreDB
    .collection("Favorites")
    .doc(currentUser.uid)
    .collection(currentUser.uid);

  return {
    watchListMoviesFirestoreRef,
    favoriteMoviesFirestoreRef,
  };
};

export default DatabaseRefs;
