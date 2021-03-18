import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  About: {
    position: "absolute",
  },
  h1: {},
  h2: {},
  h4: {},
  paragraph: {},
  philosophy: {
    width: "66.66%",
    height: "71.8rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("sm")]: {
      width: "80%",
    },
  },
  container: {
    width: "100%",
    margin: "10rem 0",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      display: "block",
    },
  },
  motto: {
    width: "30%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  education: {
    width: "40%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  goal: {
    width: "30%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  listContainer: {
    width: "50%",
    margin: "0 auto",
    textAlign: "justify",
    [sizes.down("md")]: {
      width: "80%",
    },
  },
  list: {
    listStyle: "none",
  },
  item: {},
});

export default useStyles;
