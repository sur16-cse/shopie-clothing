//need for google redirect method
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import { //auth,
    signInWithGooglePopup,
  //  signInWithGoogleRedirect,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn=()=>{
    //google redirect method
    // useEffect(() => { 
    //     (async function  fetch(){ 
    //       const response = await getRedirectResult(auth); 
    //       if(response){
    //           const userDocRef=await createUserDocumentFromAuth(response.user)
    //       }
    //       console.log(response); 
    //     })();
    //   }, []);

    const logGoogleUser=async()=>{
        const { user }=await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
       <div>
             <h1>Sign in page</h1>
             <button onClick={logGoogleUser}>Sign In with google popup</button>
             <SignUpForm />
              {/*<button onClick={signInWithGoogleRedirect}>Sign In with google redirect</button>*/}
       </div> 
    )
}

export default SignIn;
