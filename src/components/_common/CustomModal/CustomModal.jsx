import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'constants';
import { StCustomModal, StModalHeader, StModalWrapper, StModalContent } from './styled';
import { useTheme } from '../../hooks';
import Button from '../Button';
import Title from '../Title';

const CustomModal = ({ title, children, onClose }) => {
  const { colors, theme } = useTheme();
  const onCloseModal = (e) => {
    if (e.target.id === 'modalWrapper') {
      onClose();
    }
  };
  return (
    <StModalWrapper colors={colors} theme={theme} id='modalWrapper' onClick={onCloseModal}>
      <StCustomModal colors={colors} theme={theme}>
        <StModalHeader>
          <Title title={title} />
          <Button onClick={onClose} icon={icons.closeModalDark} />
        </StModalHeader>
        <StModalContent>
          {children}
        </StModalContent>
      </StCustomModal>
    </StModalWrapper>
  );
};

export default CustomModal;

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
