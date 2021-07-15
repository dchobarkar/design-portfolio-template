import { PacmanLoader } from "react-spinners";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  spinnerBlock: {
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
    <div className={classes.spinnerBlock}>
      <PacmanLoader color={"var(--primary-light)"} loading={true} size={25} />
    </div>
  );
}

export default Spinner;
