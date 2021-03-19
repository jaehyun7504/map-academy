import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Navigation: {
    width: "33.33%",
    [sizes.down("md")]: {
      display: "none",
    },
  },
  list: {
    listStyle: "none",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {},
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },
  linkActive: {},
});

export default useStyles;
