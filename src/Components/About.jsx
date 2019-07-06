import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerIntro: {
    // backgroundColor: 'inherit',
    color: '#319990',
    // justifyContent: 'space-between',
    // padding: '10px',

// eslint-disable-next-line
    // ['@media (max-width:780px)']: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // }
  },
}));

export default function About() {
  const classes = useStyles();
  return(
    <div>
      <h1>Im the about section</h1>
    </div>

  );
}
