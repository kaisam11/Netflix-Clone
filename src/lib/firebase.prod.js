import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

//seed db

//config
const config = {
    apiKey: "AIzaSyDLeUzSyvE0Vqj5ibA26Dhn15u16VGQevs",
    authDomain: "netflix-1d3de.firebaseapp.com",
    projectId: "netflix-1d3de",
    storageBucket: "netflix-1d3de.appspot.com",
    messagingSenderId: "497178481399",
    appId: "1:497178481399:web:bcba786e0537c3a73cf9f2"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export {firebase}