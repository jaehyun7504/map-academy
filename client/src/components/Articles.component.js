import React, { useState, useEffect } from "react";
import useStyles from "../styles/Articles.styles";
import Footer from "./Footer.component";

function Articles(props) {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("useEffect!");
  }, []);

  return (
    <div className={classes.Articles}>
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
