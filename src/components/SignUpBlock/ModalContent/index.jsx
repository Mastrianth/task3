import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../shared/Button';

import classes from './ModalContent.module.scss';

function CongratulationsModal({ closeModal, title, text }) {
  const headingClasses = classNames('h4', classes.heading);
  const textClasses = classNames('p2', classes.text);

  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modal}>
        <h2 className={headingClasses}>{title}</h2>
        <p className={textClasses}>{text}</p>
        <Button
          onClick={closeModal}
          variant="flat"
          className={classes.button}
          buttonTextClassName={classes.buttonText}
        >
          OK
        </Button>
      </div>
    </div>
  );
}

CongratulationsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CongratulationsModal;
