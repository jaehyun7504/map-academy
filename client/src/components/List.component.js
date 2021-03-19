import React, { useState, useEffect } from "react";
import useStyles from "../styles/List.styles";
import Loader from "./Loader.component";
import Item from "./Item.component";
import Pagination from "./Pagination.component";
import Footer from "./Footer.component";

function List({ type, location }) {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`/api/${type}/${location.search ? `${location.search}` : ""}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }, [type, location.search]);

  let list = <Loader />;
  if (!loader)
    list = items[type] ? (
      items[type].map((item) => <Item key={item._id} item={item} />)
    ) : (
      <p>콘텐츠가 존재하지 않습니다.</p>
    );

  return (
    <div className={classes.List}>
      {list}
      {items.hasPrev && <Pagination direct="left" page={items.page - 1} />}
      {items.hasNext && <Pagination direct="right" page={items.page + 1} />}
      <Footer />
    </div>
  );
}

export default List;

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
