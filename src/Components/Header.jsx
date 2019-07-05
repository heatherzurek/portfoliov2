import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerIntro: {
    // backgroundColor: 'inherit',
    color: '#319990',
    // width: '33%',
    // border: '1px solid black',
    // minHeight: 'calc(100vh - 84px)',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    padding: '-40px',
    maxWidth: '996px',
    margin: '0 auto',
    // justifyContent: 'space-between',
    // padding: '10px',

// eslint-disable-next-line
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
}));

export default function Header() {
  const classes = useStyles();
  return(
    <div className={classes.headerIntro}>
    </div>
  );
}
