import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  row: {
    width: "100%",
    height: "4rem",
  },
  col: {
    "&:nth-of-type(1)": {
      [sizes.down("sm")]: {
        display: "none",
      },
    },
    "&:nth-of-type(2)": {
      textAlign: "justify",
    },
    "&:nth-of-type(3)": {
      [sizes.down("sm")]: {
        display: "none",
      },
    },
  },
  container: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [sizes.down("xl")]: {
      width: "71rem",
    },
    [sizes.down("lg")]: {
      width: "58rem",
    },
    [sizes.down("md")]: {
      width: "41rem",
    },
    [sizes.down("sm")]: {
      width: "42rem",
    },
    [sizes.down("xs")]: {
      width: "26rem",
    },
  },
});

export default useStyles;
