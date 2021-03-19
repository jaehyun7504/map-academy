import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "../styles/Pagination.styles";

function Pagination({ direction, page, match }) {
  const classes = useStyles({ direction });

  return (
    <Link className={classes.Pagination} to={`${match.url}?page=${page}`}>
      <i className={`fas fa-chevron-circle-${direction}`} />
    </Link>
  );
}

export default withRouter(Pagination);
