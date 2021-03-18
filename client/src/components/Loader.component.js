import React from "react";
import useStyles from "../styles/Loader.styles";

function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.Loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
