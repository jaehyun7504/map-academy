import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Reset: {
    display: ({ show }) => (show ? "flex" : "none"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "36rem",
    height: "27.5rem",
    backgroundColor: "#e6e6e6",
    borderRadius: "7px",
    boxShadow: "0 2px 10px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "20",
    [sizes.down("xs")]: {
      width: "32rem",
    },
  },
  input: {
    width: "24rem",
    height: "6rem",
    "& input, & label": {
      fontSize: "1.4rem",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
  button: {
    fontSize: "1.4rem",
    marginTop: "2rem",
  },
  backdrop: {
    display: ({ show }) => (show ? "block" : "none"),
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))",
    zIndex: "10",
  },
  close: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    fontSize: "2rem",
    color: "#333",
    cursor: "pointer",
    [sizes.down("xs")]: {
      top: "1.5rem",
      right: "1.5rem",
    },
  },
});

export default useStyles;
