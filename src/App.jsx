import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {

    backgroundColor: '#02152e',
    color: '#319990',
    width: '50%',
    padding: '20px',
    // minHeight: 'calc(100vh - 84px)',
    display: 'flex',
    // margin: '-20px',
    // flexDirection: 'row',
    // alignItems: 'center',
    // maxWidth: '996px',
    // margin: '0 auto',
    // justifyContent: 'space-between',

// eslint-disable-next-line
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
