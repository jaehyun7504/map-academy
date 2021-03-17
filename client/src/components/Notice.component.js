import React from "react";
import useStyles from "../styles/Notice.styles";

function Notice(props) {
  const classes = useStyles();
  return <div className={classes.Notice}></div>;
}

export default Notice;
