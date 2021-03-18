import React from "react";
import { withRouter } from "react-router-dom";
import useStyles from "../styles/Article.styles";

function Article({ article, history, match }) {
  const classes = useStyles();

  const handleClick = () => {
    history.push(`${match.url}/${article._id}`);
  };

  return (
    <div className={classes.Article} onClick={handleClick}>
      <p>{article.title}</p>
      <p>{article.date}</p>
    </div>
  );
}

export default withRouter(Article);
