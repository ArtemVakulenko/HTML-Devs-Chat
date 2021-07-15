import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../_common/CustomModal';
import ModalIpts from './ModalIpts';
import ChooseUser from './ChoosUser';
import { StModalContent } from './styled';
import ModalButton from './ModalButton';

const CreateRoomModal = ({ onClose }) => {
  return (
    <CustomModal
      title='titleCreateChat'
      onClose={onClose}
    >
      <StModalContent>
        <ModalIpts />
        <ChooseUser />
        <ModalButton onClose={onClose} />
      </StModalContent>
    </CustomModal>
  );
};

export default CreateRoomModal;

CreateRoomModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
