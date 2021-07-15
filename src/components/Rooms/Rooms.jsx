import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import React, { useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import Search from './Search';
import ChatRoom from './ChatRoom';
import CreateRoom from './CreateRoom';
import { StRoomContainer, StChatRoomContainer } from './styled.js';
import { url, MESSAGES_KEYS } from '../../constants';

const Rooms = ({
  rooms,
  errorMsg,
  getMainPageData,
  setActiveRoom,
  setErrorMessage,
}) => {
  useEffect(() => {
    getMainPageData();
  }, []);
  const roomsRender = useMemo(() => {
    if (errorMsg === MESSAGES_KEYS.unauth) {
      setErrorMessage('');
      return <Redirect to={url.loginPage} />;
    }
    return rooms.map((el) => (
      <ChatRoom
        id={el._id}
        img={el.img}
        key={el._id}
        title={el.name}
        unreadCount={el.unreadCount}
        lastMessage={el.lastMessage}
        setActiveRoom={setActiveRoom}
      />
    ));
  }, [rooms, errorMsg]);
  const { colors, theme } = useTheme();
  return (
    <StRoomContainer colors={colors} theme={theme} >
      <Search />
      <StChatRoomContainer >
        {roomsRender}
      </StChatRoomContainer>
      <CreateRoom />
    </StRoomContainer>
  );
};

export default Rooms;

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired,
  errorMsg: PropTypes.string.isRequired,
  setActiveRoom: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  getMainPageData: PropTypes.func.isRequired,
};
