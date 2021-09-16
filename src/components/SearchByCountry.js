import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import DateStartRange from "./DateStartRange";
import DateEndRange from "./DateEndRange";
import WarnDialog from "./dialogs/WarnDialog";
import { startDate, endDate } from "./context";
import { RangesContext } from "./context";

const useStyles = makeStyles((theme) => ({
  fields: {
    display: "flex",
    alignContent: "center",
    alignItems: "baseline",
  },
  textField: {
    width: "100%",
    marginRight: "1vw",
  },
  h1: {
    textAlign: "center",
  },
  startDate: {
    marginRight: "1vw",
  },
  btn: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    width: "70%",
  },
}));

function SearchByCountry() {
  const [country, setCountry] = useState("");
  const [toggleWarn, setToggleWarn] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [data, setData] = useState(null);

  const handleClose = () => setToggleWarn((prev) => !prev);
  const classes = useStyles();

  function validateCountryName() {
    if (country.trim()) {
      fetch(`https://restcountries.eu/rest/v2/name/${country.trim()}`)
        .then((resp) => {
          if (!resp.ok) {
            setToggleWarn(true);
            throw Error("Something went wrong");
          }
          return resp.json();
        })
        .then((resp) => {
          setCountryCode(resp[0].alpha2Code);
        })
        .catch((err) => console.log(err));
    }
  }

  function searchByCountry() {
    validateCountryName();
    console.log(countryCode);
    fetch(
      `https://api.covid19api.com/total/country/${countryCode}/status/confirmed?from=2021-09-01T00:00:00Z&to=2021-09-15T00:00:00Z`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1 className={classes.h1}>Search by country</h1>
      <div className={classes.fields}>
        <TextField
          id="standard-basic"
          label="Standard"
          className={classes.textField}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {/* <RangesContext.Provider value={startDate}>
          <DateStartRange className={classes.startDate} />
        </RangesContext.Provider>

        <RangesContext.Provider value={endDate}>
          <DateEndRange />
        </RangesContext.Provider> */}
        <Button
          onClick={searchByCountry}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 {data?.Country}</td>
            <td>2 {data?.Cases}</td>
            <td>3 {data?.Date}</td>
          </tr>
        </tbody>
      </table>
      {!!toggleWarn && <WarnDialog handleClose={handleClose} />}
    </div>
  );
}

export default SearchByCountry;
