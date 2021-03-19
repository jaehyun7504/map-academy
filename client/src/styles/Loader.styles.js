import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "4rem",
    height: "4rem",
    textAlign: "center",
    "& div": {
      boxSizing: "border-box",
      display: "block",
      position: "absolute",
      width: "3.5rem",
      height: "3.5rem",
      margin: "3.5px",
      border: "3.5px solid #000",
      borderRadius: "50%",
      animation: "$loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      borderColor: "#000 transparent transparent transparent",
      "&:nth-child(1)": {
        animationDelay: "-0.45s",
      },
      "&:nth-child(2)": {
        animationDelay: "-0.3s",
      },
      "&:nth-child(3)": {
        animationDelay: "-0.15s",
      },
    },
  },
  "@keyframes loading": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export default useStyles;
