import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

function Signup() {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submit", { email, password });

    if (password.length < 6) {
      toast.error("Password must be 6 digit");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Successfully you signUp");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully sign in");
        setUser(res.user);
      })
      .catch((e) => {
        const errorMessage = e.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-lg lg:text-left">
            <h1 className="text-5xl font-bold text-white">SignUp Now!</h1>
            <p className="py-6 italic text-gray-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100/50 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "password" : "text"}
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute text-xl right-6 bottom-[8px] cursor-pointer"
                  >
                    {show ? "☺️" : "🙂"}
                  </span>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn text-white mt-4 bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9]">
                  SignUP
                </button>
                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="w-16 h-px bg-gray-800/50"></div>
                  <div className="text-white/90">Or</div>
                  <div className="w-16 h-px bg-gray-800/50"></div>
                </div>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-center">
                If you have an account please{" "}
                <Link to={"/sign-in"} className="text-[#2196F3] font-bold">
                  Singin
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
