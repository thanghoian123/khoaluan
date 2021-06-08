import React, { useState } from "react";
import "./style.css";
import * as APIs from "../../../asset/APIs";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [stt, setStt] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    APIs.onLogin(user).then((resp) => {
      console.log(resp.data);
      if (resp.data.error) {
        setErrMessage(resp.data.message);
        setOpen(true);
      } else {
        setOpen(true);
        setStt(true);
        localStorage.setItem("accessToken", resp.data.dataResponse.accessToken);
        localStorage.setItem("username", user.username);
      }
    });
  };

  if (stt) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={{ background: "#fff" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={errMessage !== "" ? "error" : "success"}
        >
          {errMessage !== "" ? errMessage : "Successful"}
        </Alert>
      </Snackbar>
      {/*  */}
      {/* LOGIN AREA START */}
      <div className="ltn__login-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form
                  action="#"
                  className="ltn__form-box contact-form-box"
                  onSubmit={onHandleSubmit}
                >
                  <input
                    type="text"
                    name="username"
                    placeholder="Username*"
                    onChange={onHandleChange}
                    className="input-text"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    onChange={onHandleChange}
                  />
                  <div className="btn-wrapper mt-0">
                    <button className="theme-btn-1 btn btn-block" type="submit">
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a href="#">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{" "}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div className="btn-wrapper">
                  <Link
                    to="/home/register"
                    className="theme-btn-1 btn black-btn"
                  >
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LOGIN AREA END */}

      {/*  */}
    </div>
  );
}

export default Login;
