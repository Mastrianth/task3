import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useInViewport } from 'react-in-viewport';
import classNames from 'classnames';

import { preloadImg } from '../utils/imgManipulation';

import classes from './Img.module.scss';

const Img = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  const { inViewport } = useInViewport(imgRef, {}, {}, {});

  const placeholderClasses = classNames(className, classes.placeholder);

  const onLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (inViewport && !isLoaded) {
      preloadImg(src, onLoad);
    }
  }, [inViewport, isLoaded]);

  if (isLoaded) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={onLoad}
        className={className}
      />
    );
  }

  return (
    <div
      ref={imgRef}
      className={placeholderClasses}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Img;
