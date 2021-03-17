import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles/Header.styles";
import Navigation from "./Navigation.component";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.Header}>
      <Link className={classes.logo} to="/about">
        MAP ACADEMY
      </Link>
      <Navigation />
      <button className={classes.button} type="button">
        로그인
      </button>
    </header>
  );
}

export default Header;
