import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TokenDispatchContext } from "../contexts/token.context";
import {
  IsAuthContext,
  IsAuthDispatchContext,
} from "../contexts/isAuth.context";
import useStyles from "../styles/Header.styles";
import Navigation from "./Navigation.component";
import Login from "./Login.component";
import Drawer from "./Drawer.component";

function Header() {
  const tokenDispatch = useContext(TokenDispatchContext);
  const isAuth = useContext(IsAuthContext);
  const isAuthDispatch = useContext(IsAuthDispatchContext);
  const [show, setShow] = useState(false);
  const classes = useStyles({ isAuth });
  const clickLogin = () => setShow(!show);
  const submit = (input) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        tokenDispatch({ type: "CREATE", token: data.data.token });
        isAuthDispatch({ type: "TOGGLE" });
        setShow(!show);
      })
      .catch((err) => console.error(err));
  };
  const handleLogout = () => {
    tokenDispatch({ type: "DELETE" });
    isAuthDispatch({ type: "TOGGLE" });
  };
  return (
    <header className={classes.Header}>
      <Link className={classes.logo} to="/about">
        MAP ACADEMY
      </Link>
      <Navigation />
      <Drawer />
      <button className={classes.login} type="button" onClick={clickLogin}>
        로그인
      </button>
      <button className={classes.logout} type="button" onClick={handleLogout}>
        로그아웃
      </button>
      <Login show={show} submit={submit} />
    </header>
  );
}

export default Header;
