import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Article: {
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
    [sizes.down("sm")]: {
      width: "80%",
    },
  },
});

export default useStyles;
