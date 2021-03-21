import React, { useState } from "react";
import useStyles from "../styles/Edit.styles";

function Edit({ hasImage, isEditing, content = { title: "", body: "" } }) {
  const classes = useStyles();

  const [state, setState] = useState({
    title: content.title,
    body: content.body,
  });
  if (hasImage) setState({ ...state, image: null });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const createContent = (formData) => {
    fetch(`/api/${!hasImage ? "notices" : "articles"}/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setState({
          title: "",
          body: "",
        });
        if (hasImage) {
          setState({ ...state, image: null });
          document.getElementById("image").value = "";
        }
      })
      .catch((err) => console.error(err));
  };

  // 수정 전
  const updateContent = (formData) => {
    fetch(`/api/${!hasImage ? "notices" : "articles"}/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setState({
          title: "",
          body: "",
        });
        if (hasImage) {
          setState({ ...state, image: null });
          document.getElementById("image").value = "";
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("body", state.body);
    if (hasImage && state.image) {
      formData.append("image", state.image, state.image.name);
    }
    return fetch(`/api/${!hasImage ? "notices" : "articles"}/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setState({
          title: "",
          body: "",
        });
        if (hasImage) {
          setState({ ...state, image: null });
          document.getElementById("image").value = "";
        }
      })
      .catch((err) => console.error(err));
  };

  const imageInput = hasImage ? (
    <input
      id="image"
      className={classes.image}
      type="file"
      onChange={handleFileChange}
    />
  ) : null;

  return (
    <div className={classes.Edit}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.title}
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <textarea
          className={classes.body}
          type="text"
          name="body"
          value={state.body}
          onChange={handleChange}
        />
        {imageInput}
        <button className={classes.button} type="submit">
          확인
        </button>
      </form>
    </div>
  );
}

export default Edit;
