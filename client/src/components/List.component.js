import React, { useState, useEffect, useContext } from "react";
import useStyles from "../styles/List.styles";
import { IsAuthContext } from "../contexts/isAuth.context";
import Loader from "./Loader.component";
import Item from "./Item.component";
import Pagination from "./Pagination.component";
import Footer from "./Footer.component";

function List({ type, location, history }) {
  const isAuth = useContext(IsAuthContext);
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

  const deleteItem = (id) => {
    const newItems = {
      ...items,
      [type]: items[type].filter((item) => item._id !== id),
    };
    setItems(newItems);
  };

  const handleClick = () => {
    history.push(`/create/${type}`);
  };

  let rows = (
    <tr className={classes.row}>
      <td className={classes.col}></td>
      <td className={classes.col}>준비 중입니다.</td>
      <td className={classes.col}></td>
    </tr>
  );
  if (items[type]) {
    rows = items[type].map((item, i) => (
      <Item
        key={item._id}
        type={type}
        item={item}
        i={i}
        p={items.page}
        deleteItem={deleteItem}
      />
    ));
  }
  const prevBtn = items.hasPrev ? (
    <Pagination direction="left" page={items.page - 1} />
  ) : null;
  const nextBtn = items.hasNext ? (
    <Pagination direction="right" page={items.page + 1} />
  ) : null;

  const createBtn = isAuth ? (
    <button className={classes.button} onClick={handleClick}>
      글쓰기
    </button>
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
        {createBtn}
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
