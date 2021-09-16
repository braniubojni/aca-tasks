import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchByCountry from "./components/SearchByCountry";
import { makeStyles } from "@material-ui/core";
import Home from "./components/Home";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "2% 10%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul style={{ listStyle: "armenian" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search-by-country">Search By Country</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>*/}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search-by-country">
              <div className={classes.wrapper}>
                <div className={classes.container}>
                  <SearchByCountry />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
