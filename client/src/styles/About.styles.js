import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  About: {},
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
  },
  container: {
    width: "100%",
    margin: "10rem 0",
    display: "flex",
    justifyContent: "space-between",
  },
  motto: {
    width: "30%",
    textAlign: "center",
  },
  education: {
    width: "40%",
    textAlign: "center",
  },
  goal: {
    width: "30%",
    textAlign: "center",
  },
  listContainer: {
    width: "50%",
    margin: "0 auto",
    textAlign: "justify",
  },
  list: {
    listStyle: "none",
  },
  item: {},
});

export default useStyles;
