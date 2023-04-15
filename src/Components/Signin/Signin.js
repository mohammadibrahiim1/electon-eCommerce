import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import './Signin.css'
import { ProductContext } from '../Context/Context';

const Signin = () => {
  const [error, setError]=useState();
  const navigate = useNavigate();

  const { createUser,updateUserProfile,signInWithFacebook,signInWithGoogle} = useContext(ProductContext);

  const handleSignIn =(event)=>{
 event.preventDefault();
 const form = event.target;
 const name = form.name.value;
 const email = form.email.value;
 const password = form.password.value;
 const photoURL = form.photoURL.value;
 console.log(name,email,password ,photoURL);

createUser(email, password)
.then((result)=>{
  const user = result.user;
  console.log(user);
  form.reset();
  handleUserProfile(name,photoURL);
  navigate('/')
})
.catch((error)=>{
  console.error(error);
  setError(error.message);
});

  };

  const handleGoogleSignIn = ()=> {
    signInWithGoogle()
    .then((result)=> {
      const user = result.user;
      console.log(user)
      navigate('/home')
    })
    .catch((error)=> {
      console.error(error)
      setError(error.message)
    })
  };
  // const handleFacebookSignIn = ()=> {
  //   signInWithFacebook()
  //   .then((result) =>{
  //     const user = result.user;
  //     console.log(user);
  //     navigate('/home')
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     setError(error)
  //   })
   
  // };

  const handleUserProfile = (name,photoURL)=> {
    const profile = {
      displayName: name,
      photoURL : photoURL,
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch((error)=> console.error(error))
  }

    return (
        <div>
               <div className="fs-5">
          <h4 className="text-center log-in-title">
          SIGN IN HERE!
          </h4>
        </div>
      <section className="form-section">
        
        <form onSubmit={handleSignIn} action="submit" className="log-in-form col-lg-6 col-md-7 col-sm-12 col-9">
          <div className="mt-4">
            <label htmlFor="email" className="input-label">
              YOUR NAME
            </label>
            <br />
            <input type="text" name="name" id="" className="input-field" />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="input-label">
              YOUR PHOTO
            </label>
            <br />
            <input type="photoURL" name="photoURL" id="" className="input-field" />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="input-label">
              EMAIL ADDRESS
            </label>
            <br />
            <input type="email" name="email" id="" className="input-field" />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="input-field"
            />
          </div>
          <div className='text-danger pt-3'>
            {
              error
            }
          </div>
          <div className="mt-4 ms-3">
            <button className="btn btn-outline-primary">Sign IN</button>
          </div>
        </form>

        <div className="mt-5 social-log-in col-lg-6 col-md-7 col-sm-12 col-12">
          <Link className="btn btn-outline-dark p-2" onClick={handleGoogleSignIn}>
            <span className="me-3">
              <FcGoogle />
            </span>{" "}
            Continue With Google
          </Link>
          <Link className="btn btn-outline-dark p-2">
            <span className="me-3">
              <FaApple />
            </span>{" "}
            Continue With Apple
          </Link>
          <Link className="btn btn-outline-dark p-2"
          //  onClick={handleFacebookSignIn}
           >
            <span className="me-3">
              <FaFacebookF />
            </span>{" "}
            Continue With Facebook
          </Link>
        </div>
      </section>

      <div>
        <p className="text-center">
          ALREADY HAVE AN ACCOUNT?{" "}
          <span>
            <Link to="/login" className="text-decoration-none fs-6">
              LOG IN
            </Link>
          </span>
        </p>
      </div>
        </div>
    );
};

export default Signin;