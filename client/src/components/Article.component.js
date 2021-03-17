import React from "react";
import useStyles from "../styles/Article.styles";

function Article(props) {
  const classes = useStyles();
  return <div className={classes.Article}></div>;
}

export default Article;
