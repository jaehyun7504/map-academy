import React from "react";
import useStyles from "../styles/Content.styles";

function Content({ children }) {
  const classes = useStyles();
  return <section className={classes.Content}>{children}</section>;
}

export default Content;
