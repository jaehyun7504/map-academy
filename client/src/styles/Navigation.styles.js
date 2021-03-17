import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Navigation: {
    width: "33.33%",
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
  },
  linkActive: {},
});

export default useStyles;
