import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx"

const store = configureStore({
    reducer: {
        user: userReducer,

    }
})
export default store;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAeSgGuBRbfslKF-aG-VW0MI8zm_FKt0Gg",
//   authDomain: "uplance-e2f0b.firebaseapp.com",
//   projectId: "uplance-e2f0b",
//   storageBucket: "uplance-e2f0b.firebasestorage.app",
//   messagingSenderId: "320768064241",
//   appId: "1:320768064241:web:18da737da2f06d5be4c750"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);