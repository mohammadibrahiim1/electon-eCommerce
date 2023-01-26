import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <section className="login-section">
        <div className="log-in-title">
          <h4>LOG IN HERE!</h4>
        </div>
        <div className="log-in-section">
          <div className="form-log-in">
            <form className="form-container">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label ">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button
                type="submit"
                class="btn btn-outline-primary w-50 mt-3"
              >
                LOG IN
              </button>
            </form>
          </div>

          <div className="google-log-in">
            <div className="log-in-button">
              <Link to="/">
                <button>
                  <span className="me-5">
                    <FcGoogle style={{ width: "25px", height: "25px" }} />
                  </span>
                  Continue With Google{" "}
                </button>
              </Link>
              <Link to="/">
                <button>
                  <span className="me-5">
                    <FaApple style={{ width: "25px", height: "25px" }} />
                  </span>
                  Continue With Google{" "}
                </button>
              </Link>
              <Link to="/">
                <button>
                  <span className="me-5">
                    <FaFacebookF style={{ width: "25px", height: "25px" }} />
                  </span>
                  Continue With Google{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

       
      </section>
      <div className="create-account">
          CANN'T LOG IN?{" "}
          <span>
            <Link className="text-decoration-none" to="/">CREATE AN ACCOUNT</Link>
          </span>
        </div>
    </div>
  );
};

export default Login;
