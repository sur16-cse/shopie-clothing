import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn=()=>{
    const logGoogleUser=async()=>{
        const { user }=await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }
    return(
       <div>
            <button onClick={logGoogleUser}>Sign In with google</button>
            <h1>Sign in page</h1>
       </div> 
    )
}

export default SignIn;
