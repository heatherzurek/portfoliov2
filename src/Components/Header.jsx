import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerIntro: {

  },
}));

export default function Header() {
  const classes = useStyles();
  return(
    <div className={classes.headerIntro}>
    </div>
  );
}
