import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { FaSearch } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import MovieGrid from "./MovieGrid";

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
  let [filters, setFilters] = useState({
    sort: "year",
    genre: "All",
    rating: "0"
  });
  let [movieList, setMovieList] = useState([]);

  async function getMovieList() {
    try {
      let { data } = await Axios.get(
        `https://yts.mx/api/v2/list_movies.json?sort_by=${
          filters.sort !== "" ? filters.sort : null
        }&genre=${filters.genre !== "" ? filters.genre : null}&rating=${
          filters.rating !== "" ? filters.rating : null
        }`
      );
      setMovieList(data.data);
    } catch (err) {
      console.log("movieList error...", err);
    }
  }

  useEffect(() => {
    getMovieList();
  }, []);

  const handleChange = event => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
    getMovieList();
  };

  let movieGenreList = [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Crime",
      "Drama",
      "Fantasy",
      "Historical",
      "Historical fiction",
      "Horror",
      "Magical realism",
      "Mystery",
      "Paranoid fiction",
      "Philosophical",
      "Political",
      "Romance",
      "Saga",
      "Satire",
      "Science fiction",
      "Social",
      "Speculative",
      "Thriller",
      "Urban",
      "Western"
    ],
    sort_by_list = [
      "title",
      "year",
      "rating",
      "peers",
      "seeds",
      "download_count",
      "like_count",
      "date_added"
    ];

  console.log(movieList);
  return (
    <main className="plr-60">
      <div className="flex filter-box flex-justify-space-between pb-10">
        <div className="flex flex-justify-start flex-justify-space-between">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="genre"
              value={filters.genre}
              onChange={handleChange}
              autoWidth={true}
              disableUnderline
              className="tavern-select"
            >
              {movieGenreList.map(genre => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="sort"
              id="demo-simple-select"
              value={filters.sort}
              autoWidth={true}
              onChange={handleChange}
              disableUnderline
            >
              {sort_by_list.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Minimum Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="rating"
              id="demo-simple-select"
              value={filters.rating}
              autoWidth={true}
              onChange={handleChange}
              disableUnderline
            >
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
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
      <MovieGrid movieList={movieList} />
    </main>
  );
}
