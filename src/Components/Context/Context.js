import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app);
export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading]=useState(true)

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile);
  }

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
      });

  }, []);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged( auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return unsubscribe;
  },[])


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const signOut = () => {
    return signOut(auth);
  }

  const products = {
    allProducts,
  }

 const authInfo={
  createUser,
  signIn,
  signOut,
  loading,
  user,
  updateUserProfile,
  products,
 }
  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};
