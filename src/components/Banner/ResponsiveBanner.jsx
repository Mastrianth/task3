import React from 'react';
import bannerImage1024 from '../../assets/icons/banner1024.jpg';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    objectFit: 'cover',
    zIndex: '-1',
    maxWidth: '1024',
    height: '650px'
  }
}))

const ResponsiveBanner = () => {
  const classes = useStyles();
  return (
    <>
      <picture>
        <img
          src={bannerImage1024}
          alt="Girl with laptop"
          className={classes.img}
          loading="lazy"
        />
      </picture>
    </>
  )
}

export default ResponsiveBanner;
