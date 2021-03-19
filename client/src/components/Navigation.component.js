import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/Navigation.styles";

function Navigation() {
  const classes = useStyles();
  const clickHandler = () => alert("준비 중입니다.");
  return (
    <nav className={classes.Navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            className={classes.link}
            activeClassName={classes.linkActive}
            to="/about"
          >
            학원 소개
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={classes.link}
            activeClassName={classes.linkActive}
            to="/notices"
          >
            공지 사항
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={classes.link}
            activeClassName={classes.linkActive}
            to="/articles"
          >
            사설
          </NavLink>
        </li>
        <li className={classes.item}>
          <p className={classes.link} onClick={clickHandler}>
            특강
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
