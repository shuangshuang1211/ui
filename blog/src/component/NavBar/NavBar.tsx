import React from 'react';
import { Grid, BottomNavigation, BottomNavigationAction, makeStyles, Typography } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#343a40 !important',
    width: '100%',
    height: 80,
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  },
  bar: {
    backgroundColor: 'inherit'
  }
});

const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string>();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="center" >
        <Grid item xs={12} sm={4} >
          <Typography align="center" className={classes.text} variant="h5">
            <FormattedMessage id={`nav.title`} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <BottomNavigation
            className={classes.bar}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction className={classes.text} label={<FormattedMessage id="nav.homePage"/>} icon={<RestoreIcon />} />
            <BottomNavigationAction className={classes.text} label={<FormattedMessage id="nav.favorities"/>} icon={<FavoriteIcon />} />
            <BottomNavigationAction className={classes.text} label={<FormattedMessage id="nav.acticles"/>} icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;