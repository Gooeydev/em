import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {IconButton, Typography, Button, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";

import './App.css';

import { RegisterScreen } from './register/register';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
  },
  header: {
    
  },
  appBar: {
    position: "relative",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
  
}));

function App() {
  
  const styles = useStyles();
  
  return (
    <Router className="em">
      <Grid container className={styles.root}>
        <Grid item>
           
              <AppBar className={styles.appBar}>
                <Toolbar>
                  <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={styles.title}>
                    em
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
            
        </Grid>
        <Grid item>
          <Switch>
            <Route exact path="/">
              <Container>
                <Grid container>
                  <Grid item>
                    <h1>Home</h1>
                  </Grid>
                </Grid>
              </Container>
            </Route>
            <Route path="/register">
              <RegisterScreen/>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
