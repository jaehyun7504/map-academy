import React, { useState, useEffect } from "react";
import useStyles from "../styles/Notice.styles";
import Footer from "./Footer.component";

function Notice({ match }) {
  const classes = useStyles();
  const [notice, setNotice] = useState({});

  useEffect(() => {
    fetch(`/api/notices/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setNotice({
          title: data.data.title,
          body: data.data.body,
        });
      });
  }, [match.params.id]);

  return (
    <div className={classes.Notice}>
      <div className={classes.container}>
        {" "}
        <h1>{notice.title}</h1>
        <p>{notice.body}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Notice;
