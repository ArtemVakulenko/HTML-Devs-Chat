import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from 'src/components/_common/Button';
import { useTheme } from 'src/components/hooks';
import { icons } from 'constants';
import { StChatDialogHeader, StChatTitle } from './styled';

const ChatHeader = ({ activeRoom, clearActiveRoom, clearMessageValue }) => {
  const history = useHistory();
  const { colors, theme } = useTheme();
  const handleClick = () => {
    history.push('/main');
    clearActiveRoom();
    clearMessageValue();
  };

  return (
    <StChatDialogHeader colors={colors} theme={theme}>
    <StChatTitle>{activeRoom.name}</StChatTitle>
    <Button icon={icons.closeModalDark} onClick={handleClick}/>
    </StChatDialogHeader>
  );
};

ChatHeader.propTypes = {
  activeRoom: PropTypes.object,
  clearActiveRoom: PropTypes.func,
  clearMessageValue: PropTypes.func,
};

export default ChatHeader;
