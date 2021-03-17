import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/Navigation.styles";

function Navigation() {
  const classes = useStyles();
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
          <NavLink
            className={classes.link}
            activeClassName={classes.linkActive}
            to="/lectures"
          >
            특강
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
