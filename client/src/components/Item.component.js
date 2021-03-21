import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { IsAuthContext } from "../contexts/isAuth.context";
import { TokenContext } from "../contexts/token.context";
import useStyles from "../styles/Item.styles";

function Item({ type, item, i, p, deleteItem, match, history }) {
  const isAuth = useContext(IsAuthContext);
  const token = useContext(TokenContext);

  const classes = useStyles();

  const order = (10 * (p - 1) + i + 1 + "").padStart(2, "0");

  const handleUpdate = () => {
    history.push(`/update/${type}/${item._id}`);
  };
  const handleDelete = () => {
    fetch(`api/${type}/${item._id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => deleteItem(item._id))
      .catch((err) => console.error(err));
  };

  let button = null;
  if (isAuth) {
    button = (
      <>
        <button className={classes.updateBtn} onClick={handleUpdate}>
          수정
        </button>
        <button className={classes.deleteBtn} onClick={handleDelete}>
          삭제
        </button>
      </>
    );
  }

  return (
    <tr className={classes.Item}>
      <td className={classes.col}>{order}</td>
      <td className={classes.col}>
        <div className={classes.container}>
          <Link to={`${match.url}/${item._id}`}>{item.title}</Link>
        </div>
        {button}
      </td>
      <td className={classes.col}>{item.date}</td>
    </tr>
  );
}

export default withRouter(Item);
