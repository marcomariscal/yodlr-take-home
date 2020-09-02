import React, { useState } from "react";
import Users from "./Users";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 500,
  },
}));

const Admin = () => {
  const [searchValue, setSearch] = useState();
  const setSearchValue = (input) => {
    setSearch(input);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Search setSearchValue={setSearchValue} />
      <Users searchValue={searchValue} />
    </div>
  );
};

export default Admin;
