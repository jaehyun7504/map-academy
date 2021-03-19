import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Pagination: {
    float: ({ direction }) => direction,
    margin: ({ direction }) =>
      direction === "left" ? "1rem 0 0 2rem" : "1rem 3rem 0 0",
    cursor: "pointer",
  },
});

export default useStyles;
