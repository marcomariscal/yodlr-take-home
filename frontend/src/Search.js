import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    minWidth: 500,
    marginBottom: "1rem",
  },
}));

const Search = ({ setSearchValue }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  // delay setting the search value
  const delayedSearchFor = useCallback(
    _.debounce((input) => setSearchValue(input), 500),
    []
  );

  const handleChange = (e) => {
    const { value } = e.target;

    setInput(value);
    delayedSearchFor(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Search">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          onChange={handleChange}
          value={input}
          className={classes.input}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Search;
