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
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

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

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const authInfo = {
    createUser,
    signIn,
    logOut,
    loading,
    user,
    updateUserProfile,
    signInWithGoogle,
    signInWithFacebook,
  };
  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};
