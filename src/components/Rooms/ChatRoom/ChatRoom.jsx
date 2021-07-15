import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks';
import Title from '../../_common/Title/Title';
import ChatInfo from './ChatInfo';
import { StChatRoomContainer, StChatImg } from './styled';

const ChatRoom = ({
  id,
  img,
  title,
  match,
  unreadCount,
  setActiveRoom,
  clearMessageValue,
  clearUnreadMessages,
}) => {
  const { colors, theme } = useTheme();
  const handleSetActiveRoom = () => {
    setActiveRoom(id);
    clearUnreadMessages(id);
    clearMessageValue();
  };
  useEffect(() => {
    if (match.params.id) {
      const roomId = match.params.id;
      setActiveRoom(roomId);
    }
  }, []);
  return (
    <NavLink to={`/main/${id}`} onClick={handleSetActiveRoom}>
      <StChatRoomContainer
        theme={theme}
        colors={colors}
        isActive={match.params.id === id}
      >
        <StChatImg src={img || '../assets/img/iconfinder-icon.svg'} />
        <Title title={title} isTranslate={false} />
        <ChatInfo unreadCount={unreadCount} />
      </StChatRoomContainer>
    </NavLink>
  );
};

export default ChatRoom;

ChatRoom.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  match: PropTypes.object,
  unreadCount: PropTypes.number,
  setActiveRoom: PropTypes.func,
  clearMessageValue: PropTypes.func,
  clearUnreadMessages: PropTypes.func,
};
