import React from "react";
import useStyles from "../styles/Articles.styles";
import Footer from "./Footer.component";

function Articles(props) {
  const classes = useStyles();
  return (
    <div className={classes.Articles}>
      Articles
      <Footer />
    </div>
  );
}

export default Articles;
