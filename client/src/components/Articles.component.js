import React, { useState, useEffect } from "react";
import useStyles from "../styles/Articles.styles";
import Article from "./Article.component";
import Footer from "./Footer.component";
import Loader from "./Loader.component";

function Articles(props) {
  const classes = useStyles();

  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data.articles);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }, []);

  let list = <Loader />;
  if (!loader) list = articles.map((article) => <Article article={article} />);

  return (
    <div className={classes.Articles}>
      {list}
      <Footer />
    </div>
  );
}

export default Articles;

/*
const [state, setState] = useState({
  title: "",
  body: "",
  image: null,
});

const handleChange = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

const handleFileChange = (e) => {
  setState({
    ...state,
    image: e.target.files[0],
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("title", state.title);
  formData.append("body", state.body);
  if (state.image) formData.append("image", state.image, state.image.name);
  return fetch("/api/articles/", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setState({
        title: "",
        body: "",
        image: null,
      });
      document.getElementById("image").value = "";
    })
    .catch((err) => console.error(err));
};
*/

/*
<form onSubmit={handleSubmit}>
  <input
    style={{ width: "90vw", height: "5vh", margin: "1rem auto" }}
    type="text"
    name="title"
    value={state.title}
    onChange={handleChange}
  />
  <textarea
    style={{ width: "90vw", height: "50vh", margin: "1rem auto" }}
    type="text"
    name="body"
    value={state.body}
    onChange={handleChange}
  />
  <input id="image" type="file" onChange={handleFileChange} />
  <button type="submit">Submit</button>
</form>
*/
