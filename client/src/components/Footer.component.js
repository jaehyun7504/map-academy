import React from "react";
import useStyles from "../styles/Footer.styles";

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.Footer}>
      <span className={classes.copyright}>
        Copyright &copy; 2021 Map Academy. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
