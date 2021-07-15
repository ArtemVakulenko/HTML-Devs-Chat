import React from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import { url } from 'constants';
import { EVT } from '../../helpers';

const WebSockets = ({ userId, setNewRoom, setNewMessage }) => {
  const socket = io(url.server, { query: { id: userId } });
  if (!userId) socket.disconnect();
  socket.on(EVT.CREATE_ROOM, (room) => {
    setNewRoom(room);
  });
  socket.on(EVT.NEW_MESSAGE, (message) => {
    setNewMessage(message);
  });
  return <></>;
};

export default WebSockets;

WebSockets.propTypes = {
  userId: PropTypes.string.isRequired,
  setNewRoom: PropTypes.func.isRequired,
  setNewMessage: PropTypes.func.isRequired,
};
