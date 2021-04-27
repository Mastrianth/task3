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
    width: '282px',
    height: '340px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '1px 0 0 0',
    borderRadius: '4px'
  },
  userPhoto: {
    borderRadius: '50%',
    width: '70px',
    height: 'auto',
    marginBottom: '10px',
    marginTop: '28px'
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
    padding: ' 0 22px',
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
    textDecoration: 'none !important',
    color: 'rgba(126,126,126,1) ',
  },
  border: {
    margin: '8px',
    border: '1px solid #F4E041',
    height:'324px',
    borderRadius: '10px',
  }
}));

const User = React.memo(({ user }) => {
  const classes = useStyles();

  return (
    <Grid item key={user.id} md={4} xs={12} sm={6} className={classes.gridItem}>
      <Box component='div' className={classes.userContent} >
        <Box component='div' className={classes.border}>
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

        <Link className={classes.userPhone} href={`tel:${user.phone}`}>
          <Typography
            component="p"
            variant="body1"
            classname={classes.userPhone}
          >
            {user.phone}
          </Typography>
        </Link>
        </Box>
      </Box>
    </Grid>
  );
});

export default User;
