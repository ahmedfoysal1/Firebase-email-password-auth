import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user',currentUser)
        setUser(currentUser)
      })
      return () => {
        unsubscribe()
      }
    },[])

    const signOutUser = () =>{
      return signOut(auth);
    }
    const name = 'Foysal Ahmed';

  const authInfo = {
    name,
    createUser,
    signIn,
    user,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * create context with null as default value
 * create provider
 * set a default value
 * use the AuthProvider component in main.jsx and place the routerProvider into the Authprovider component and get the router provider as a children in authProvider by distructuring in authProvider
 * must export the context what just created ---> createContext()
 */
