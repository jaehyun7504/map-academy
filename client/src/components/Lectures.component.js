import React from "react";
import useStyles from "../styles/Lectures.styles";
import Footer from "./Footer.component";

function Lectures(props) {
  const classes = useStyles();
  return (
    <div className={classes.Lectures}>
      Lectures
      <Footer />
    </div>
  );
}

export default Lectures;
