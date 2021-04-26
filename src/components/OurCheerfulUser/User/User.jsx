import React from 'react';

import {
  Box,
  Grid,
  Link,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import defaultAvatar from '../../../assets/icons/defaultAvetar.svg';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    paddingBottom: '35px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '55px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '50px',
    },
  },
  userContent: {
    width: '216px',
    margin: '0 auto',
  },
  userPhoto: {
    borderRadius: '50%',
    width: '70px',
    height: 'auto',
    marginBottom: '10px',
  },
  userName: {
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingBottom: '10px',
    fontFamily: "'Asap', sans-serif",
    fontWeight: '700',
    fontStyle: 'normal',
    alignItems: 'center',
    lineHeight: '25.2px',
    fontSize: '18px',
    color: 'rgba(0,0,0,0.87)',
  },
  userEmail: {
    wordWrap: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    alignItems: 'center',
    lineHeight: '25.6px',
    fontSize: '16px',
    color: 'rgba(126,126,126,1)',
  },
  userPosition: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    alignItems: 'center',
    lineHeight: '25.6px',
    fontSize: '16px',
    color: 'rgba(126,126,126,1)',
  },
  userPhone: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    alignItems: 'center',
    lineHeight: '25.6px',
    fontSize: '16px',
    color: 'rgba(126,126,126,1)',
  },
}));

const User = React.memo(({ user }) => {
  const classes = useStyles();

  return (
    <Grid item key={user.id} md={4} xs={12} sm={6} className={classes.gridItem}>
      <Box>
        <img
          className={classes.userPhoto}
          src={user.photo}
          alt={user.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = defaultAvatar;
          }}
        />
        <Typography component="h3" variant="h3" className={classes.userName}>
          {user.name}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={classes.userPosition}
        >
          {user.position}
        </Typography>
        <Link href={`mailto:${user.email}`}>
          <Tooltip title={user.email}>
            <Typography
              component="p"
              variant="body1"
              className={classes.userEmail}
            >
              {user.email}
            </Typography>
          </Tooltip>
        </Link>

        <Link href={`tel:${user.phone}`}>
          <Typography
            component="p"
            variant="body1"
            classname={classes.userPhone}
          >
            {user.phone}
          </Typography>
        </Link>
      </Box>
    </Grid>
  );
});

export default User;
