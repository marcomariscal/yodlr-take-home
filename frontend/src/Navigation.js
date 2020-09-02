import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Navigation = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const pathObj = {
    "/": 0,
    "/signup": 1,
    "/admin": 2,
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={pathObj[pathname]}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Signup" component={Link} to="/signup" />
        <Tab label="Admin" component={Link} to="/admin" />
      </Tabs>
    </Paper>
  );
};

export default Navigation;
