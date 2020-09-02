import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Container component="main" maxWidth="xs">
          <div className={classes.root}>
            <CssBaseline />
            <Routes />
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
