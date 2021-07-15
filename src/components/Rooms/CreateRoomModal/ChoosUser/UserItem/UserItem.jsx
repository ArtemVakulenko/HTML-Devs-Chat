import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { icons } from 'constants';
import { useTheme } from 'src/components/hooks';
import { StUserItem, StAvatarBlock, StCheck } from './styled';

const UserItem = ({ id, img, userName, isOnline, setChoosenUser }) => {
  const [isCheck, setCheck] = useState(false);
  const { colors, theme } = useTheme();
  const onCheck = () => {
    isCheck
      ? setChoosenUser(id, true)
      : setChoosenUser(id);
    setCheck(!isCheck);
  };
  return (
    <StUserItem colors={colors} theme={theme} onClick={onCheck}>
      <StAvatarBlock color={colors} theme={theme}>
        <img src={img || icons.defaultUserIcon} />
        <span>{isOnline ? 'Online' : 'Offline'}</span>
      </StAvatarBlock>
      <span>{userName}</span>
      <StCheck >{isCheck ? '✓' : '+'}</StCheck>
    </StUserItem>
  );
};

export default UserItem;

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  setChoosenUser: PropTypes.func.isRequired,
};
