import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Header: {
    width: "100%",
    height: "5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    textDecoration: "none",
  },
  button: {
    [sizes.down("md")]: {
      display: "none",
    },
  },
});

export default useStyles;
