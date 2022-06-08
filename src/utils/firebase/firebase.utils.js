import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBCzDRKXqFG9zDm-fLKXxLyXWeaJs2--Y",
    authDomain: "shopie-clothing.firebaseapp.com",
    projectId: "shopie-clothing",
    storageBucket: "shopie-clothing.appspot.com",
    messagingSenderId: "25442182859",
    appId: "1:25442182859:web:060fd532f6d2fcc9e61d4e"
  };
  
  // Initialize Firebase config
  const firebaseApp = initializeApp(firebaseConfig);
  //Initialie Google authentication
  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
  export const db=getFirestore();
  export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot.exists());
    //if user data does not exist;
    if(!userSnapshot.exists()){
        const { displayName, email }=userAuth;
        const createdAt=new Date();
        try{
            await setDoc(userDocRef,{
                displayName,email,createdAt
            });
        }catch(error){
            console.log('error catching the user',error.message)
        }
    }
    return userDocRef;
  }

  