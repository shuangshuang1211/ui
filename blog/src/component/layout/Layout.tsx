import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
const useStyles = makeStyles({
  root: {
    minHeight: '100vh'
  },
});
const Layout: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <NavBar />
    </Container>
  );
};

export default Layout;