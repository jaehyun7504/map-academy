import React, { useState, useEffect } from "react";
import useStyles from "../styles/Article.styles";
import Footer from "./Footer.component";

function Article({ match }) {
  const classes = useStyles();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(`/api/articles/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setArticle({
          title: data.data.title,
          body: data.data.body,
          imageUrl: data.data.imageUrl,
        });
      });
  }, [match.params.id]);

  const image = article.imageUrl ? (
    <img src={`/${article.imageUrl}`} alt={article.title} />
  ) : null;

  return (
    <div className={classes.Article}>
      <div className={classes.container}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        {image}
      </div>
      <Footer />
    </div>
  );
}

export default Article;
