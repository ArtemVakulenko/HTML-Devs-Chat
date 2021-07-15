import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../_common/Button';
import CreateRoomModal from '../CreateRoomModal';
import { StCreateRoomContainer } from './styled.js';

const CreateRoom = ({ getAllUsers }) => {
  const [modalHide, setModalHide] = useState(false);
  const openModal = () => {
    setModalHide(true);
    getAllUsers();
  };
  const closeModal = () => {
    setModalHide(false);
  };
  return (
    <>
      {
        modalHide
          ? <CreateRoomModal onClose={closeModal} />
          : null
      }
      <StCreateRoomContainer >
        <Button
          value="createRoom"
          onClick={openModal}
        />
      </StCreateRoomContainer>
    </>
  );
};

export default CreateRoom;

CreateRoom.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};
