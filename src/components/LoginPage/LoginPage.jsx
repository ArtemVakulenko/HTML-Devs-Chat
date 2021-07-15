import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MESSAGES_KEYS } from 'constants';
import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import Title from '../_common/Title';
import Button from '../_common/Button';
import AuthInput from '../_common/AuthInput';
import CustomLink from '../_common/CustomLink';
import { StLoginContainer, StLoginView } from './styled';
import { useTheme } from '../hooks';

const LoginPage = ({ message, signInRequest, setErrorMessage }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const redirect = useMemo(() => {
    if (message === MESSAGES_KEYS.successAuth) {
      return <Redirect to="/main" />;
    }
    return null;
  }, [message]);
  useEffect(() => {
    if (message === MESSAGES_KEYS.successAuth) {
      return NotificationManager.success(t(message), t('Success'), 3000);
    }
    if (message && message !== MESSAGES_KEYS.successReg) {
      NotificationManager.error(t(message), t('Error'), 3000);
      setErrorMessage('');
    }
  }, [message]);
  useEffect(() => {
    return () => setErrorMessage('');
  }, []);
  const onKeyDown = (e) => {
    if (e.key === 'Enter') signInRequest();
  };
  return (
    <StLoginContainer onKeyDown={onKeyDown}>
      <StLoginView colors={colors} theme={theme}>
        <Title title="authorization" />
        <AuthInput type="login" page="login" />
        <AuthInput type="password" page="login" />
        <Button onClick={signInRequest} value="LoginBtn" />
        <CustomLink path="/registration" title="toReg" />
      </StLoginView>
      {redirect}
    </StLoginContainer>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  message: PropTypes.string.isRequired,
  signInRequest: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};
