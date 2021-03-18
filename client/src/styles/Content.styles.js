import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Content: {
    position: "relative",
  },
  "@global": {
    ".Content-enter": {
      opacity: "0",
    },
    ".Content-enter-active": {
      opacity: "1",
      transition: "opacity 0.2s ease-out",
    },
    ".Content-exit": {
      opacity: "1",
    },
    ".Content-exit-active": {
      opacity: "0",
      transition: "opacity 0.2s ease-out",
    },
  },
});

export default useStyles;
