import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Password dont match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        const res = await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  const responseGoogle = async (res) => {
    const user = {
      username: res.profileObj.name,
      email: res.profileObj.email,
      withGoogle: true,
    };

    try {
      const res = await axios.post("/auth/registerOauth", user);
      const loginUser = res.data;
      console.log("loginuser", loginUser);
      localStorage.setItem("user", JSON.stringify(loginUser));
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#E0E0E0",
        position: "relative",
      }}
    >
      <div
        className="d-flex"
        style={{
          position: "absolute",
          width: "1000px",
          height: "500px",
          margin: "150px 200px",
          backgroundColor: "#E0E0E0",
        }}
      >
        <div style={{ width: "50%", height: "100%" }}>
          <div className="mx-5 " style={{ width: "400px", marginTop: "150px" }}>
            <h1 className="font-weight-bold" style={{ color: "#1775EE" }}>
              Codecial
            </h1>
            <h5 className="pt-1">
              Connect with Friends and the world around you on Codecial
            </h5>
          </div>
        </div>
        <div style={{ width: "50%", height: "100%" }}>
          <div
            className="card"
            style={{
              height: "460px",
              width: "400px",
              marginTop: "25px",
              marginLeft: "50px",
              borderRadius: "10px",
              border: "0px",
            }}
          >
            <div
              style={{
                width: "350px",
                height: "300px",
                marginTop: "20px",
                marginLeft: "25px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  className="d-flex align-items-center mb-3"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <input
                    type="text"
                    required
                    ref={username}
                    className="form-control border-0"
                    placeholder="Username"
                  />
                </div>
                <div
                  className="d-flex align-items-center mb-3"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <input
                    type="email"
                    required
                    ref={email}
                    className="form-control border-0"
                    placeholder="Email"
                  />
                </div>
                <div
                  className="d-flex align-items-center mb-3"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <input
                    type="password"
                    required
                    ref={password}
                    minLength="6"
                    className="form-control border-0"
                    placeholder="Password"
                  />
                </div>

                <div
                  className="d-flex align-items-center mb-3"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <input
                    type="password"
                    required
                    ref={confirmPassword}
                    className="form-control border-0"
                    placeholder="Confirm Password"
                  />
                </div>

                <div
                  className="d-flex align-items-center mb-3"
                  style={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#1775EE",
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-block text-white font-weight-bold"
                    style={{ backgroundColor: "#1775EE" }}
                  >
                    Sign Up
                  </button>
                </div>

                <div
                  className="d-flex align-items-center mb-3 "
                  style={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                >
                  {/* <button type="submit" style={{ backgroundColor: "#1775EE" }}>
                    Sign Up
                  </button> */}
                  <GoogleLogin
                    className="btn btn-block text-white font-weight-bold text-white bg-primary"
                    clientId="953613880079-npqf053gt80b5r5cfcgn9jkl5lntv0ob.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  >
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "15px" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign
                      up with Google
                    </span>
                  </GoogleLogin>
                </div>
              </form>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <div
                  className="d-flex align-items-center mb-1 mx-auto"
                  style={{
                    width: "70%",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#42B728",
                  }}
                >
                  <button
                    type="text"
                    className="btn btn-block text-white font-weight-bold"
                    style={{ backgroundColor: "#42B728" }}
                  >
                    Log In into Account
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
