import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { Redirect } from "react-router";
import * as APIs from "../../../asset/APIs";

function Register(props) {
  const [user, setuser] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [stt, setStt] = useState(false);

  const onHandleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmpassword) {
      setErrMessage("Mật khẩu không khớp");
      setOpen(true);
      return;
    }
    APIs.onSingup(user).then((resp) => {
      console.log(resp.data);
      if (resp.data.status === "OK") {
        setStt(true);
      } else {
        setErrMessage(resp.data.message);
      }
    });
    setOpen(true);
  };

  if (stt) {
    return <Redirect to="/home/login" />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      className="ltn__login-area pb-110"
      style={{ background: "#fff", paddingTop: "20px" }}
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={errMessage !== "" ? "error" : "success"}
        >
          {errMessage !== "" ? errMessage : "Successful"}
        </Alert>
      </Snackbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Register <br />
                Your Account
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sit aliquid, Non distinctio vel iste.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form
                onSubmit={onHandleSubmit}
                action="#"
                className="ltn__form-box contact-form-box"
              >
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="input-text"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="input-text"
                />
                <input
                  onChange={onHandleChange}
                  type="text"
                  name="username"
                  placeholder="Username*"
                  className="input-text"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  className="input-text"
                  onChange={onHandleChange}
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password*"
                  className="input-text"
                  onChange={onHandleChange}
                />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />I consent to Herboil
                  processing my personal data in order to send personalized
                  marketing material in accordance with the consent form and the
                  privacy policy.
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />
                  By clicking "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="#">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p>
                <div className="go-to-btn mt-50">
                  <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
