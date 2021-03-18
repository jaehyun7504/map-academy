import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Loader: {
    display: "inline-block",
    position: "relative",
    width: "80px",
    height: "80px",
    "& div": {
      boxSizing: "border-box",
      display: "block",
      position: "absolute",
      width: "64px",
      height: "64px",
      margin: "8px",
      border: "8px solid #000",
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
