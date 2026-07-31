import React from "react";
import { Link } from "react-router";

function Signin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-lg lg:text-left">
            <h1 className="text-5xl font-bold text-white">SignIn Now!</h1>
            <p className="py-6 italic text-gray-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn text-white mt-4 bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9]">
                  Login
                </button>
                <p className="text-center">
                  If you have an account please{" "}
                  <Link to={"/sign-up"} className="text-[#2196F3] font-bold">
                    Singup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
