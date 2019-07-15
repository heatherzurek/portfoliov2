import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  container: {
    flex: 'display',
    flexDirection: 'column',
    textAlign: 'right',
    backgroundColor: '#02152e',
    color: '#319990',
    '& h1': {
      fontSize: '82px',
      fontWeight: '550',
      marginBottom: '-10px',
      marginTop: '-10px',

    },
    '& h2': {
      fontSize: '40px',
      marginTop: '-10px',
    },
    '& p': {
      marginTop: '-10px',
      fontSize: '14px',
      fontWeight: 'bolder',
      // marginTop: '-1px',
    },
    '& a': {
        textDecoration: 'none',
        fontWeight: 'bolder',
        fontSize: '14px',
        color: '#f0d24d',
        '&:hover': {
            textDecoration: 'none',
        }
    }
},
bigAvatar: {
  left: 400,
  width: 160,
  height: 160,
  margin: '0 auto',
},
  }));

export default function Main() {
  const classes = useStyles();

  return(

    <div className={classes.container}>
      <Avatar alt="Heather Zurek" src="https://avatars1.githubusercontent.com/u/48393327?s=400&u=b11c331171ab6d449d6d0c5b00155cf1f5ce0553&v=4" className={classes.bigAvatar} />
      <h1>Heather Zurek</h1>
      <h2> Software Developer </h2>
      <p>Portfolio coming soon.</p>
      <p>Checkout my <a href="http://www.github.com/heatherzurek">Github</a> for projects,</p>
      <p>follow me on <a href="https://twitter.com/sleepywifi">Twitter</a>,</p>
      <p>or <a href="mailto:heather.zurek@gmail.com">Email me</a>.</p>

    </div>
  );
}
