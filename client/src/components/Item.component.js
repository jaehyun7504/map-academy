import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "../styles/Item.styles";

function Item({ item, match }) {
  const classes = useStyles();

  return (
    <div className={classes.Item}>
      <Link to={`${match.url}/${item._id}`}>{item.title}</Link>
      <Link to={`${match.url}/${item._id}`}>{item.date}</Link>
    </div>
  );
}

export default withRouter(Item);
