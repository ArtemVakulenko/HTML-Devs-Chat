import React from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import Button from 'src/components/_common/Button';
import { useTranslation } from 'react-i18next';

const ModalButton = ({ users, roomName, createChat, onClose }) => {
  const { t } = useTranslation();
  const onCreateClick = () => {
    if (!roomName) return NotificationManager.error(t('nameRequired'), t('Error'), 3000);
    if (users.length === 0) return NotificationManager.error(t('noUsers'), t('Error'), 3000);
    createChat();
    onClose();
  };
  return <Button value='createChatModal' onClick={onCreateClick} />;
};

export default ModalButton;

ModalButton.propTypes = {
  users: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  roomName: PropTypes.string.isRequired,
  createChat: PropTypes.func.isRequired,
};
