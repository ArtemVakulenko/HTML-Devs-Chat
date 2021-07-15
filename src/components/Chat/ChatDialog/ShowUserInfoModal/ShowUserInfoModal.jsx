import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from 'src/components/_common/CustomModal';
import Title from 'src/components/_common/Title';
import { icons } from 'constants';
import { StUserInfoContainer, StUserProfilePhoto, StUserInfoDiv, StOnline } from './styled';

const ShowUserInfoModal = ({ onCloseModal, userToShow }) => (
  <>
    <CustomModal onClose={onCloseModal} title={userToShow.login}>
      <StUserInfoContainer>
        <StUserProfilePhoto src={userToShow.img || icons.defaultUserIcon} />
        <StOnline>{userToShow.online ? 'online' : 'offline'}</StOnline>
        <StUserInfoDiv>
          <Title title='userModalName' />
          <span>{userToShow.name}</span>
        </StUserInfoDiv>
        <StUserInfoDiv>
          <Title title='userModalLastName' />
          <span>{userToShow.lastName}</span>
        </StUserInfoDiv>
        <StUserInfoDiv>
          <Title title='userModalAge' />
          <span>{userToShow.age}</span>
        </StUserInfoDiv>
        <StUserInfoDiv>
          <Title title='userModalCity' />
          <span>{userToShow.city}</span>
        </StUserInfoDiv>
        <StUserInfoDiv>
          <Title title='userModalHobbie' />
          <span>{userToShow.hobbie}</span>
        </StUserInfoDiv>
      </StUserInfoContainer>
    </CustomModal>
  </>
);

ShowUserInfoModal.propTypes = {
  onCloseModal: PropTypes.func,
  userToShow: PropTypes.object,
};

export default ShowUserInfoModal;
