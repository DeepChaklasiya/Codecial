import React from "react";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          height: "400px",
          margin: "150px 200px",
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="" style={{ width: "50%", height: "100%" }}>
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
              height: "350px",
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
                marginTop: "25px",
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
                    type="email"
                    ref={email}
                    required
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
                    ref={password}
                    required
                    minLength="6"
                    className="form-control border-0"
                    placeholder="Password"
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
                    disabled={isFetching}
                  >
                    {isFetching ? (
                      <CircularProgress color="white" size="19px" />
                    ) : (
                      "Log In"
                    )}
                  </button>
                </div>
              </form>

              <div
                className="d-flex align-items-center text-center mb-3"
                style={{ width: "100%", height: "45px" }}
              >
                <a
                  className="mx-auto"
                  style={{ cursor: "pointer", color: "#1775EE" }}
                >
                  Forgot Password ?
                </a>
              </div>

              <Link to="/register" style={{ textDecoration: "none" }}>
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
                    Create a New Account
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
