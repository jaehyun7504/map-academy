import React from "react";
import useStyles from "../styles/Notices.styles";
import Footer from "./Footer.component";

function Notices(props) {
  const classes = useStyles();
  return (
    <div className={classes.Notices}>
      Notices
      <Footer />
    </div>
  );
}

export default Notices;
