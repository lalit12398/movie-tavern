import React, { useEffect, useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { FaSearch } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 0,
    width: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  input: {
    width: 300
  }
}));

export default function Main() {
  const classes = useStyles();
  const [age, setAge] = useState("");

  // const inputLabel = useRef(null);
  // const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    // console.log(inputLabel);
    // setLabelWidth((inputLabel.current !== null) ? inputLabel.current.offsetWidth : "");
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <main className="plr-60">
      <div className="flex filter-box flex-justify-space-between pb-10">
        <div className="flex flex-justify-start flex-justify-space-between">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              autoWidth={true}
              disableUnderline
              className="tavern-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              autoWidth={true}
              onChange={handleChange}
              disableUnderline
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Minimum Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              autoWidth={true}
              onChange={handleChange}
              disableUnderline
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-justify-end">
          <TextField
            id="standard-basic"
            label="Search by name..."
            className={classes.input}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <FaSearch className="search-icon" />
                </IconButton>
              )
            }}
          />
        </div>
      </div>
      <div className="flex flex-justify-space-between mt-20 flex-wrap">
        <div className="flex flex-column movie-card mb-20">
          <div className="mb-20">
            <img className="cover-img" src="../../assets/avengers.jpg" />
          </div>
          <div>
            <div className="flex flex-justify-space-between">
              <h3 className="movie-card-title">Avengers : Endgame</h3>
              <GoPrimitiveDot style={{ fontSize: 30, color: "#f44336" }} />
            </div>
            <p>Seeds: 24 &nbsp; Peers: 10</p>
          </div>
        </div>
        <div className="flex flex-column mb-20">
          <div className="mb-20">
            <img className="cover-img" src="../../assets/joker.jpg" />
          </div>
          <div>
            <div className="flex flex-justify-space-between">
              <h3 className="movie-card-title">Joker</h3>
              <GoPrimitiveDot
                style={{ fontSize: 30, color: "#4caf50" }}
              />
            </div>
            <p>Seeds: 24 &nbsp; Peers: 10</p>
          </div>
        </div>
        <div className="flex flex-column mb-20">
          <div className="mb-20">
            <img className="cover-img" src="../../assets/moonlight.jpg" />
          </div>
          <div>
            <div className="flex flex-justify-space-between">
              <h3 className="movie-card-title">moonlight</h3>
              <GoPrimitiveDot
                style={{ fontSize: 30, color: "#ffeb3b" }}
              />
            </div>
            <p>Seeds: 24 &nbsp; Peers: 10</p>
          </div>
        </div>
        <div className="flex flex-column mb-20">
          <div className="mb-20">
            <img className="cover-img" src="../../assets/6_under.jpg" />
          </div>
          <div>
            <div className="flex flex-justify-space-between">
              <h3 className="movie-card-title">6 underground</h3>
              <GoPrimitiveDot
                style={{ fontSize: 30, color: "#4caf50" }}
              />
            </div>
            <p>Seeds: 24 &nbsp; Peers: 10</p>
          </div>
        </div>
        <div className="flex flex-column mb-20">
          <div className="mb-20">
            <img className="cover-img" src="../../assets/underworld.jpeg" />
          </div>
          <div>
            <div className="flex flex-justify-space-between">
              <h3 className="movie-card-title">underworld : awakening</h3>
              <GoPrimitiveDot
                style={{ fontSize: 30, color: "#cddc39" }}
              />
            </div>
            <p>Seeds: 24 &nbsp; Peers: 10</p>
          </div>
        </div>
      </div>
    </main>
  );
}
