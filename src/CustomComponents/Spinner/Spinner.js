import { PacmanLoader } from "react-spinners";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "var(--minHeight)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Spinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PacmanLoader color={"var(--secondary)"} loading={true} size={25} />
    </div>
  );
}

export default Spinner;
