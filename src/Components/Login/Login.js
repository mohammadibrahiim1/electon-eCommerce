import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="fs-5">
          <h4 className="text-center log-in-title">
          LOG IN HERE!
          </h4>
        </div>
      <section className="form-section">
        
        <form action="submit" className="log-in-form col-lg-6 col-md-7 col-sm-12 col-9">
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
          <div className="mt-4 ms-3">
            <button className="btn btn-outline-primary">LOG IN</button>
          </div>
        </form>

        <div className="mt-5 social-log-in col-lg-6 col-md-7 col-sm-12 col-12">
          <Link className="btn btn-outline-dark p-2">
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
          <Link className="btn btn-outline-dark p-2">
            <span className="me-3">
              <FaFacebookF />
            </span>{" "}
            Continue With Facebook
          </Link>
        </div>
      </section>

      <div>
        <p className="text-center">
          DON'T HAVE AN ACCOUNT?{" "}
          <span>
            <Link to="" className="text-decoration-none fs-6">
              CREATE AN ACCOUNT
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
