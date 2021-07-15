import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import { StDialogContainer } from './styled';
import MessageItem from '../MessageItem';

const Dialog = ({ messages, getMessages, match, userId }) => {
  useEffect(() => {
    const roomId = match.params.id;
    getMessages({ roomId, userId });
    messagesEndRef.current.scrollIntoView();
  }, [match]);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [messages]);
  const messagesEndRef = useRef(null);
  const { colors, theme } = useTheme();

  return (
    <StDialogContainer colors={colors} theme={theme}>
      {messages.map((el) => (
        <MessageItem {...el} key={el.date} />
      ))}
      <div ref={messagesEndRef} />
    </StDialogContainer>
  );
};

Dialog.propTypes = {
  match: PropTypes.object,
  userId: PropTypes.string,
  activeRoom: PropTypes.object,
  getMessages: PropTypes.func,
  lastMessage: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default Dialog;
