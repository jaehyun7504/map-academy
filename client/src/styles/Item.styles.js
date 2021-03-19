import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  row: {
    width: "100%",
    height: "4rem",
  },
  col: {
    "&:nth-of-type(2)": {
      textAlign: "justify",
    },
  },
});

export default useStyles;
