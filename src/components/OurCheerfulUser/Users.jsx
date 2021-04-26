import React, { useCallback, useEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, CircularProgress, Container, Grid, makeStyles, Typography,
} from '@material-ui/core';

import { getFirstUsers, getNextUsers } from '../../store/actions/usersActions';
import { clearErrors } from '../../store/actions/errorActions';

import { APIUrls } from '../../configs/APIUrls';

import User from './User/User';

const MOBILE_MAX_WIDTH = 600;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 16px 80px',
    backgroundColor: '#fff',
    textAlign: 'center',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '122px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '161px',
    },
  },
  titleH2: {
    padding: '68px 0 2px 1px',
    [theme.breakpoints.up('md')]: {
      padding: '112px 0 16px',
      fontSize: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '155px 0 20px',
      fontSize: '60px',
    },
  },
  usersList: {
    paddingTop: '37px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '77px',
    },
  },
  wrapperButton: {
    position: 'relative',
  },
  btn: {
    padding: '5px 61px',
  },
  preloader: {
    marginBottom: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
  },
}));

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { users, totalPages, nextUrl } = useSelector((store) => store.usersReducer, shallowEqual);
  const isFetching = useSelector((store) => store.toggleIsFetchingReducer.isFetching);

  const getUsers = useCallback(
    () => {
      const url = window.innerWidth < MOBILE_MAX_WIDTH
        ? APIUrls.getUsersMobileStartPage
        : APIUrls.getUsersTabletStartPage;

      dispatch(clearErrors());

      dispatch(getFirstUsers(url));
    },
    [dispatch],
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleNextUsersList = () => {
    dispatch(getNextUsers(nextUrl));
  };

  return (
    <Container
      component="section"
      maxWidth={false}
      className={classes.root}
    >
      <Typography
        component="h2"
        variant="h2"
        className={classes.titleH2}
      >
        Our cheerful users
      </Typography>
      <Typography
        component="h3"
        variant="h4"
      >
        The best specialist is shown below
      </Typography>

      {users && users.length > 0 && (
      <Grid
        container
        justify="center"
        className={classes.usersList}
      >
        {users.map((user) => <User key={user.id} user={user} />)}
      </Grid>
      )}

      <Box component="div" className={classes.wrapperButton}>
        {nextUrl && (new URL(nextUrl).searchParams.get('page') <= totalPages)
        && (
        <Button
          variant="contained"
          color="primary"
          disabled={isFetching}
          className={classes.btn}
          onClick={handleNextUsersList}
        >
          Show more
        </Button>
        )}
        {isFetching && (
        <CircularProgress
          thickness={5}
          size={26}
          color="secondary"
          className={classes.preloader}
        />
        )}
      </Box>
    </Container>
  );
};

export default Users;
