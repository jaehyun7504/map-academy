import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Item: {
    width: "100%",
    height: "4rem",
  },
  col: {
    height: "100%",
    "&:nth-of-type(1)": {
      [sizes.down("sm")]: {
        display: "none",
      },
    },
    "&:nth-of-type(2)": {
      display: "flex",
      alignItems: "center",
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
    textAlign: "justify",
    marginRight: "auto",
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
  updateBtn: {
    cursor: "pointer",
  },
  deleteBtn: {
    cursor: "pointer",
  },
});

export default useStyles;
