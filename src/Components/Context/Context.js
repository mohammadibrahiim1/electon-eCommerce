import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const appleProvider = new OAuthProvider('apple.com');

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  const logOut = () => {
    return signOut(auth);
  };

  const  signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)
 }
  const  signInWithApple =()=>{
    return signInWithPopup(auth,appleProvider)
 }

  const authInfo = {
    createUser,
    signIn,
    logOut,
    loading,
    user,
    updateUserProfile,
    signInWithGoogle,
    signInWithApple,
  };
  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};
