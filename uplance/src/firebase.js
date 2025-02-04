
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAeSgGuBRbfslKF-aG-VW0MI8zm_FKt0Gg",
    authDomain: "uplance-e2f0b.firebaseapp.com",
    projectId: "uplance-e2f0b",
    storageBucket: "uplance-e2f0b.firebasestorage.app",
    messagingSenderId: "320768064241",
    appId: "1:320768064241:web:18da737da2f06d5be4c750"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;

    } catch (error) {
        console.error(error);
    }
};

const logout = async () => {
    await signOut(auth);
}

export { signInWithGoogle, logout, auth };