import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from 'src/components/_common/CustomModal';
import ChangePhoto from './ChangePhoto';
import ModalIpt from './ModalIpt';
import { StModal, StIptBlock } from './styled';
import ModalButton from './ModalButton';

const ChangeDataModal = ({ onClose }) => {
  return (
    <div>
      <CustomModal title="myAccount" onClose={onClose} >
        <StModal>
          <ChangePhoto />
          <StIptBlock>
            <ModalIpt field="name" />
            <ModalIpt field="lastName" />
            <ModalIpt field="age" />
            <ModalIpt field="city" />
            <ModalIpt field="hobbie" />
          </StIptBlock>
          <ModalButton onClose={onClose} />
        </StModal>
      </CustomModal>
    </div>
  );
};

export default ChangeDataModal;

ChangeDataModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
