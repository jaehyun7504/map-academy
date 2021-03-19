import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  List: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100vh - 5rem)",
  },
  container: {
    position: "relative",
    width: "75%",
    minHeight: "calc(100% - 5rem)",
    margin: "0 auto",
    padding: "5rem 0",
  },
  table: {
    width: "100%",
    textAlign: "center",
  },
  row: {
    width: "100%",
    height: "4rem",
  },
  col: {
    "&:nth-of-type(1)": {
      width: "5%",
    },
    "&:nth-of-type(2)": {
      width: "80%",
    },
    "&:nth-of-type(3)": {
      width: "15%",
    },
  },
});

export default useStyles;
