import React from 'react';
import { useHistory } from 'react-router';
import { icons, url } from 'constants';
import { deleteCookie } from 'helpers';
import Button from '../../_common/Button/Button';

const Exit = () => {
  const history = useHistory();
  const onClick = () => {
    deleteCookie('token');
    history.push(url.loginPage);
  };
  return (
    <Button onClick={onClick} icon={icons.logOutIcon} />
  );
};

export default Exit;
