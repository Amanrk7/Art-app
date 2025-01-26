// src/components/SignIn.jsx
import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "./firebase";
import art_img1 from "../assets/images/art_img1.jpg";
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      onSignIn(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div id="signinDiv">
        {/* --------left side------ */}
        <div className="signInDiv-leftside">
          <div id="signindiv_subdiv_first">
            <div className="logo-login-grand-parent">
              <div style={{ width: "100%" }}>
                <Link to="/" className="text-xl font-semibold">
                  {/* <h1 id="logoText" className="text-gradient cursor-pointer">  */}
                  <img id="logo-img" src={artiumhiveLogo} alt="logo" />
                  {/* </h1> */}
                </Link>
              </div>
            </div>
            <div className="mainLoginFields-div" style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setErrorEmail(value === "");
                    setEmail(value);
                  }}
                  placeholder="Email"
                  style={{
                    height: "3em",
                    background: "rgb(255 255 255 / 0%)",
                    border: "0.9px solid rgb(195, 195, 195)",
                    color: "#615e5e",
                    fontWeight: "900",
                    fontFamily: "circular",
                    letterSpacing: " .3px",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                {errorEmail && (
                  <p
                    style={{
                      color: " #df4d4d",
                      fontFamily: "circular",
                      transition: ".9s ease-in-out",
                    }}
                  >
                    Invalid email!
                  </p>
                )}
              </div>
              <div style={{ width: "100%" }}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setErrorPassword(value === "");
                    setPassword(value);
                  }}
                  placeholder="Password"
                  style={{
                    height: "3em",
                    background: "rgb(255 255 255 / 0%)",
                    border: "0.9px solid rgb(195, 195, 195)",
                    color: "#615e5e",
                    fontWeight: "900",
                    fontFamily: "circular",
                    letterSpacing: " .3px",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  aria-describedby="passwordError"
                />
                {errorPassword && (
                  <p
                    style={{
                      color: " #df4d4d",
                      fontFamily: "circular",
                      transition: ".9s ease-in-out",
                    }}
                  >
                    Invalid password!
                  </p>
                )}
              </div>
              <div className="login-btn-div">
                <button
                  id="loginBtn"
                  onClick={handleSignIn}
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontFamily: "circular",
                    backgroundColor: "rgb(125 121 121)",
                  }}
                >
                  Log In
                </button>
                {error && (
                  <p
                    style={{
                      color: " #df4d4d",
                      fontFamily: "circular",
                      transition: ".9s ease-in-out",
                    }}
                  >
                    Invalid email or password!!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --------right side---------- */}
        <div id="loginPageImg-Ins">
          {/* <img
          style={{ width: "100%", height: "100%" }}
          src={art_img1}
          alt="artimg1"
        /> */}
          <div id="login-page-img-instructions">
            <div>
              <h1 style={{ fontFamily: "'Phonk Contrast DEMO'" }}>
                We Welcome you to ARTIUM HIVE
              </h1>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Phonk Contrast DEMO'" }}>
                We are invite only
              </h3>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "'Phonk Contrast DEMO'",
                  fontSize: "17px",
                }}
              >
                Follow below steps to be a member at ARTIUM HIVE
              </h2>
              <div>
                <ul>
                  <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                    Send your best art collection at
                    artiumhiveofficial@gmail.com
                  </li>
                  <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                    Wait for our team to review your collection
                  </li>
                  <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                    If success, we'll guide you for further steps.
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ fontFamily: "'Phonk Contrast DEMO'" }}>
              Lastly thank you for your interest in art
            </div>
          </div>
        </div>
      </div>

      <Footer id=" footer-signIn-Page" />
    </>
  );
};

export default SignIn;
