import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

//   export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)

  export const db=getFirestore();

  export const addCollectionAndDocuments=async(collectionKey,objectsToAdd,field)=>{
      const collectionRef=collection(db,collectionKey);
      const batch=writeBatch(db);
      objectsToAdd.forEach((object) => {
        const docRef=doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object)
      });
      await batch.commit();
      console.log('done')
  }

  export const getCategoriesAndDocuments=async()=>{
    const collectionRef=collection(db,'categories')
    const q=query(collectionRef)
    const querySnapshot=await getDocs(q)
    const categoryMap= querySnapshot.docs.reduce((acc,docSnapShot)=>{
      const {title,items}=docSnapShot.data()
      acc[title.toLowerCase()]=items;
      return acc;
    },{})
    return categoryMap
  }

  export const createUserDocumentFromAuth=async(
    userAuth,
    additionalInformation={})=>{
    if(!userAuth) return
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
                displayName
                ,email
                ,createdAt
                ,...additionalInformation
            });
        }catch(error){
            console.log('error catching the user',error.message)
        }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword =async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword =async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser =async()=>await signOut(auth)

  export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback)