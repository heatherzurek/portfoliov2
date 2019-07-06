import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Error404 from './Components/Error404';
import About from './Components/About';
import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {

    backgroundColor: '#02152e',
    color: '#319990',
    width: '996px',
    padding: '20px',
    margin: '0 auto',
    marginTop: '50px',
    textAlign: 'center',
    // minHeight: 'calc(100vh - 84px)',
    // margin: '-20px',
    // flexDirection: 'row',
    alignItems: 'center',
    // maxWidth: '996px',
    // margin: '0 auto',
    // justifyContent: 'space-between',

// eslint-disable-next-line
    // ['@media (max-width:780px)']: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Footer />
      <Main />
      <Switch>
      <Route exact path='/' component={Header} />
       <Route path='/about' component={About} />
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
