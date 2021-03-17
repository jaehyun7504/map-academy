import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  MenuDrawer: {
    display: "none",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default useStyles;
