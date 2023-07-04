import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default Login;
