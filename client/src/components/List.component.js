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

  let rows = (
    <tr className={classes.row}>
      <td className={classes.col}></td>
      <td className={classes.col}>준비 중입니다.</td>
      <td className={classes.col}></td>
    </tr>
  );
  if (items[type]) {
    rows = items[type].map((item, i) => (
      <Item key={item._id} item={item} i={i} p={items.page} />
    ));
  }
  const prevBtn = items.hasPrev ? (
    <Pagination direction="left" page={items.page - 1} />
  ) : null;
  const nextBtn = items.hasNext ? (
    <Pagination direction="right" page={items.page + 1} />
  ) : null;

  let table = <Loader />;
  if (!loader) {
    table = (
      <>
        <table className={classes.table}>
          <thead>
            <tr className={classes.row}>
              <th className={classes.col}></th>
              <th className={classes.col}>제목</th>
              <th className={classes.col}>작성일</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {prevBtn}
        {nextBtn}
      </>
    );
  }

  return (
    <div className={classes.List}>
      <div className={classes.container}>{table}</div>
      <Footer />
    </div>
  );
}

export default List;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
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
