import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getTimeString } from 'src/helpers';
import UserMessage from './UserMessage';
import GuestMessage from './GuestMessage';
import ShowUserInfoModal from '../ShowUserInfoModal';

const MessageItem = ({
  date,
  author,
  userPic,
  content,
  userName,
  authorPic,
  getOneUser,
   }) => {
  const msgDate = getTimeString(date);
  const [isVisible, setVisible] = useState(false);

  const modalOn = () => {
    setVisible(true);
    getOneUser(author);
  };
  const modalOff = () => {
    setVisible(false);
  };
    return (
      <>
      {
        userName === author
        ? (
          <UserMessage
            date={msgDate}
            content={content}
            authorPic={userPic}
            onClick={modalOn}
          />
        ) : (
          <GuestMessage
          date={msgDate}
          content={content}
          authorPic={authorPic}
          authorName={author}
          onClick={modalOn}
          />
        )
      }
      {isVisible
      ? <ShowUserInfoModal onCloseModal={modalOff} login={author}/>
      : null}
      </>
    );
};

MessageItem.propTypes = {
  date: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
  userPic: PropTypes.string,
  userName: PropTypes.string,
  authorPic: PropTypes.string,
  getOneUser: PropTypes.func,
};

export default MessageItem;
