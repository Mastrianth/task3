import React from 'react';
import PropTypes from 'prop-types';

const WebpImg = ({
  webpSrc, jpgSrc, alt, className,
}) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <source srcSet={jpgSrc} type="image/jpeg" />
    <img src={jpgSrc} alt={alt} className={className} />
  </picture>
);

WebpImg.defaultProps = {
  className: null,
};

WebpImg.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  jpgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default WebpImg;
