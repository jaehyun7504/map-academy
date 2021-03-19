import React, { useState, useEffect, Fragment } from "react";
import useStyles from "../styles/Article.styles";
import Loader from "./Loader.component";
import Footer from "./Footer.component";

function Article({ match }) {
  const classes = useStyles();
  const [article, setArticle] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`/api/articles/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle({
          title: data.data.title,
          body: data.data.body,
          imageUrl: data.data.imageUrl,
        });
        setLoader(false);
      });
  }, [match.params.id]);

  let content = <Loader />;
  if (!loader) {
    const bodyArr = article.body.split("\r\n");
    const body = bodyArr.map((sentence, i) => (
      <Fragment key={i}>
        <p>{sentence}</p>
        {i === bodyArr.length - 1 && <br />}
      </Fragment>
    ));
    const image = article.imageUrl ? (
      <img src={`/${article.imageUrl}`} alt={article.title} />
    ) : null;
    content = (
      <Fragment>
        <h1>{article.title}</h1>
        <hr />
        {body}
        {image}
      </Fragment>
    );
  }

  return (
    <div className={classes.Article}>
      <div className={classes.container}>{content}</div>
      <Footer />
    </div>
  );
}

export default Article;
