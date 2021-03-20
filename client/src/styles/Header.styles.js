import { makeStyles } from "@material-ui/styles";

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
  login: {
    width: "6rem",
    cursor: "pointer",
    display: ({ isAuth }) => (!isAuth ? "block" : "none"),
  },
  signout: {
    width: "6rem",
    cursor: "pointer",
    display: ({ isAuth }) => (isAuth ? "block" : "none"),
  },
});

export default useStyles;
