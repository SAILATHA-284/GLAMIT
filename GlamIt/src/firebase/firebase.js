import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCwmhEZtgkXzABXxA7pWy6bXujL2hLfOf4",
	authDomain: "insta-clone-yt-1e993.firebaseapp.com",
	projectId: "insta-clone-yt-1e993",
	storageBucket: "insta-clone-yt-1e993.appspot.com",
	messagingSenderId: "609993461712",
	appId: "1:609993461712:web:7b25eccedd40bf4a2e33d5",
	measurementId: "G-2YT1SXREM9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
