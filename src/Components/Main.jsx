import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 auto',
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
      fontSize: '14px',
      fontWeight: '600',
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
  // margin: 10,
  width: 140,
  height: 140,
  margin: '0 auto',
},
  }));

export default function Main() {
  const classes = useStyles();

  return(

    <div className={classes.container}>
      <Avatar alt="Heather Zurek" src="https://i.etsystatic.com/iusa/74a4fd/47949351/iusa_400x400.47949351_tu1w.jpg?version=0" className={classes.bigAvatar} />

      <h1>Heather Zurek</h1>
      <h2> Software Developer </h2>
      <p>Portfolio coming soon.</p>
      <p>Checkout my <a href="http://www.github.com/heatherzurek">Github</a> for current projects,</p>
      <p>follow me on <a href="https://twitter.com/sleepywifi">Twitter</a>, or <a href="mailto:heather.zurek@gmail.com">Email me</a>.</p>

    </div>
  );
}
