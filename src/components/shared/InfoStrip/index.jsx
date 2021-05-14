import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import ContentWrapper from '../../ContentWrapper';
import Button from '../Button';

import classes from './InfoStrip.module.scss';

const InfoStrip = ({ text, buttonText, onClick }) => {
  const textClasses = classNames('h5', classes.text);

  return (
    <div className={classes.InfoStrip}>
      <ContentWrapper>
        <div className={classes.container}>
          <p className={textClasses}>{text}</p>
          <Button
            onClick={onClick}
            variant="secondary"
            className={classes.button}
          >
            {buttonText}
          </Button>
        </div>
      </ContentWrapper>
    </div>
  );
};

InfoStrip.defaultProps = {
  buttonText: null,
  onClick: null,
};

InfoStrip.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default InfoStrip;
