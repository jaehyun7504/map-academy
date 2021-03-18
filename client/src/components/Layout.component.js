import React from "react";
import useStyles from "../styles/Layout.styles";
import Header from "./Header.component";

function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
