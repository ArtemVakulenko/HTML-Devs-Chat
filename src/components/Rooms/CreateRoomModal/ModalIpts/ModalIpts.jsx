import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/_common/Input';
import FileIpt from 'src/components/_common/FileIpt';
import { StIpts } from './styled';

const ModalIpts = ({
  setImg,
  imgName,
  roomValue,
  searchValue,
  setRoomName,
  setSearchUser,
}) => (
  <StIpts>
    <Input
      value={roomValue}
      onChange={setRoomName}
      placeholder='enterChatName'
    />
    <Input
      value={searchValue}
      onChange={setSearchUser}
      placeholder='findUser'
    />
    <FileIpt onChange={setImg} value={imgName} />
  </StIpts>
);

export default ModalIpts;

ModalIpts.propTypes = {
  setImg: PropTypes.func.isRequired,
  imgName: PropTypes.string.isRequired,
  roomValue: PropTypes.string.isRequired,
  setRoomName: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchUser: PropTypes.func.isRequired,
};
