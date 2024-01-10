import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider=  new GoogleAuthProvider()

  //---sign in with google
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  //---sign in with email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser=()=>{
    return signOut(auth)
  }
  useEffect(() => {
    const unsubcribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoader(false)
        const loggedUser = { email: currentUser?.email };
        if(currentUser && currentUser.email)
        {
        fetch(`https://car-check-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("User-token", data.token);
            console.log("token is generated and add in local storage");
          });
        }
        else{
          localStorage.removeItem('User-token')
          console.log("current user token have been removed");
        }
      });
    };

    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = { user,loader,createUser, loginUser,logoutUser,googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
