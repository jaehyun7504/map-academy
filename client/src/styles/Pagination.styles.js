import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Pagination: {
    float: ({ direct }) => direct,
    cursor: "pointer",
  },
});

export default useStyles;
