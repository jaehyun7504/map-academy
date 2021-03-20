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
import Reset from "./Reset.component";
import Drawer from "./Drawer.component";

function Header() {
  const tDispatch = useContext(TokenDispatchContext);
  const isAuth = useContext(IsAuthContext);
  const aDispatch = useContext(IsAuthDispatchContext);

  const classes = useStyles({ isAuth });

  const [show, setShow] = useState(false);
  const [reset, setReset] = useState(false);

  const showLogin = () => setShow(true);
  const hideLogin = () => setShow(false);

  const showReset = () => {
    hideLogin();
    setReset(true);
  };
  const hideReset = () => setReset(false);

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
  const submitReset = (input) => {
    fetch("/api/reset", {
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
        alert(
          "이메일을 확인하세요. 이메일이 오지 않은 경우, 스팸 보관함을 확인하세요."
        );
        hideReset();
      })
      .catch((err) => console.error(err));
  };

  const handleSignout = () => {
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
      <Login
        show={show}
        submit={submit}
        hideLogin={hideLogin}
        showReset={showReset}
      />
      <Reset show={reset} submit={submitReset} hideReset={hideReset} />
      <button className={classes.login} type="button" onClick={showLogin}>
        로그인
      </button>
      <button className={classes.signout} type="button" onClick={handleSignout}>
        로그아웃
      </button>
    </header>
  );
}

export default Header;
