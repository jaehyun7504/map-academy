import React, { useState, useEffect, Fragment } from "react";
import useStyles from "../styles/Notice.styles";
import Loader from "./Loader.component";
import Footer from "./Footer.component";

function Notice({ match }) {
  const classes = useStyles();
  const [notice, setNotice] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`/api/notices/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setNotice({
          title: data.data.title,
          body: data.data.body,
        });
        setLoader(false);
      });
  }, [match.params.id]);

  let content = <Loader />;
  if (!loader) {
    const bodyArr = notice.body.split("\r\n");
    const body = bodyArr.map((sentence, i) => (
      <Fragment key={i}>
        <p>{sentence}</p>
        {i === bodyArr.length - 1 && <br />}
      </Fragment>
    ));
    content = (
      <Fragment>
        <h1>{notice.title}</h1>
        <hr />
        {body}
        {notice.imageUrl && (
          <img src={`/${notice.imageUrl}`} alt={notice.title} />
        )}
      </Fragment>
    );
  }

  return (
    <div className={classes.Notice}>
      <div className={classes.container}>{content}</div>
      <Footer />
    </div>
  );
}

export default Notice;
