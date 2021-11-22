import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setUSer } from "../redux/slices/userSlice";
import { auth, provider } from "../utils/firebase";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { UserStateValue } from "./StateProvider";

export default function Login() {
    const dispatch = useDispatch()
  const Signin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => dispatch(setUSer({})))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img alt="Here is a photo" />
        <div className="login__text">
          <h1>Sign in whatsapp</h1>
        </div>
        <Button type="submit" onClick={Signin}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
