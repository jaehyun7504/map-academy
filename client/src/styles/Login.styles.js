import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Login: {
    opacity: ({ show }) => (show ? "1" : "0"),
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    height: "30rem",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    "& input": {
      "&:not(last-of-type)": {
        marginBottom: "1rem",
      },
    },
  },
});

export default useStyles;
