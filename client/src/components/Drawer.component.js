import React from "react";
import { withRouter } from "react-router-dom";
import useStyles from "../styles/Drawer.styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function MenuDrawer(props) {
  const [state, setState] = React.useState({ show: false });
  const classes = useStyles();
  const items = [
    { name: "학원 소개", link: "/about" },
    { name: "공지 사항", link: "/notices" },
    { name: "사설", link: "/articles" },
    { name: "특강", link: "/lectures" },
  ];
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setState({ show: open });
  };
  const list = () => (
    <div
      className={`${classes.list} ${classes.fullList}`}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {items.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => props.history.push(item.link)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.MenuDrawer}>
      <Button onClick={toggleDrawer(true)}>메뉴</Button>
      <Drawer anchor="bottom" open={state.show} onClose={toggleDrawer(false)}>
        {list("bottom")}
      </Drawer>
    </div>
  );
}

export default withRouter(MenuDrawer);
