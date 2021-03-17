import React from "react";
import useStyles from "../styles/Layout.styles";
import Header from "./Header.component";
import Footer from "./Footer.component";

function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.Layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
