import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#02152e',
    color: '#319990',
    '& h1': {
      fontSize: '82px',
      marginBottom: '-10px',
    },
    '& h2': {
      fontSize: '32px',
      marginTop: '-10px',
    },
    '& p': {
      fontSize: '14px',
      marginTop: '-5px',
    },
    '& a': {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#f0d24d',
        '&:hover': {
            textDecoration: 'none',
        }
    }
},
      profilelinks: {
          textAlign: 'center',
          margin: 'auto 0px 10px'
      },
  }));

export default function Main() {
  const classes = useStyles();

  return(
    <div className={classes.container}>
      <h1>Heather Zurek</h1>
      <h2>Software Developer</h2>
      <p>Portfolio coming soon.</p>
      <p>Checkout my <a href="http://www.github.com/heatherzurek">Github</a> for current projects,</p>
      <p>follow me on <a href="https://twitter.com/sleepywifi">Twitter</a>, or view my <a href="#">Resume</a></p>
    </div>
  );
}
