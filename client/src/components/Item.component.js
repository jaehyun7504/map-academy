import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "../styles/Item.styles";

function Item({ item, i, p, match }) {
  const classes = useStyles();
  const order = (10 * (p - 1) + i + 1 + "").padStart(2, "0");

  return (
    <tr className={classes.row}>
      <td className={classes.col}>{order}</td>
      <td className={classes.col}>
        <div className={classes.container}>
          <Link to={`${match.url}/${item._id}`}>{item.title}</Link>
        </div>
      </td>
      <td className={classes.col}>{item.date}</td>
    </tr>
  );
}

export default withRouter(Item);
