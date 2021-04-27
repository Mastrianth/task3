import React from 'react';
import { makeStyles } from '@material-ui/core';
import bannerImageReg1024 from '../../assets/icons/manLaptop.jpg';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    objectFit: 'cover',
    zIndex: '-1',
    maxWidth: '1024',
    height: 'auto',
  },
}));

const ResponsiveBanner = () => {
  const classes = useStyles();
  return (
    <>
      <picture>
        <img
          src={bannerImageReg1024}
          alt="Man with laptop"
          className={classes.img}
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default ResponsiveBanner;
