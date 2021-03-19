import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "../styles/Pagination.styles";

function Pagination({ direct, page, match }) {
  const classes = useStyles({ direct });

  return (
    <Link className={classes.Pagination} to={`${match.url}?page=${page}`}>
      <i className={`fas fa-chevron-circle-${direct}`} />
    </Link>
  );
}

export default withRouter(Pagination);
