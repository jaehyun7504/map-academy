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
  const tDispatch = useContext(TokenDispatchContext);
  const isAuth = useContext(IsAuthContext);
  const aDispatch = useContext(IsAuthDispatchContext);

  const classes = useStyles({ isAuth });

  const [show, setShow] = useState(false);

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
        if (data.message === "error") {
          return alert(data.error);
        }
        tDispatch({
          type: "CREATE",
          token: data.data.token,
        });
        aDispatch({
          type: "TOGGLE",
        });
        setShow(!show);
      })
      .catch((err) => console.error(err));
  };

  const toggleShow = () => setShow(!show);

  const handleLogout = () => {
    tDispatch({ type: "DELETE" });
    aDispatch({ type: "TOGGLE" });
  };

  return (
    <header className={classes.Header}>
      <Link className={classes.logo} to="/about">
        MAP ACADEMY
      </Link>
      <Drawer />
      <Navigation />
      <Login show={show} submit={submit} toggleShow={toggleShow} />
      <button className={classes.login} type="button" onClick={toggleShow}>
        로그인
      </button>
      <button className={classes.logout} type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </header>
  );
}

export default Header;
