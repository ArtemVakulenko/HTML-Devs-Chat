import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/_common/Button';

const ModalButton = ({ onClick, onClose }) => {
  const onButtonClick = () => {
    onClick();
    onClose();
  };
  return <Button value="changeInfo" onClick={onButtonClick} />;
};

export default ModalButton;

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
