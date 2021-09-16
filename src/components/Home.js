import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1>COVID-19 Information</h1>
    </div>
  );
}

export default Home;
