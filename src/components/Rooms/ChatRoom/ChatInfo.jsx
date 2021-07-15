import React from 'react';
import PropTypes from 'prop-types';
import { StInfo, StMessageCount } from './styled.js';

const ChatInfo = ({ unreadCount }) => {
  return (
    <StInfo >
      {
        unreadCount
          ? <StMessageCount><span>{unreadCount}</span></StMessageCount>
          : null
      }
    </StInfo>
  );
};

ChatInfo.propTypes = {
  unreadCount: PropTypes.number,
};

export default ChatInfo;
