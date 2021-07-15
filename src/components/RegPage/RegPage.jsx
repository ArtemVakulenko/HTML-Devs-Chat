import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MESSAGES_KEYS } from 'constants';
import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import Title from '../_common/Title';
import Button from '../_common/Button';
import AuthInput from '../_common/AuthInput';
import CustomLink from '../_common/CustomLink';
import { StAuthContainer, StAuthView } from './styled';
import { useTheme } from '../hooks';

const RegPage = ({ message, signUpRequest }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const redirect = useMemo(() => {
    if (message && message !== MESSAGES_KEYS.successReg) {
      NotificationManager.error(t(message), t('Attention'), 3000);
    }
    if (message === MESSAGES_KEYS.successReg) {
      return <Redirect to="/" />;
    }
    return null;
  }, [message]);
  const onKeyDown = (e) => {
    if (e.key === 'Enter') signUpRequest();
  };
  return (
    <StAuthContainer onKeyDown={onKeyDown}>
      <StAuthView colors={colors} theme={theme}>
        <Title title="registration" />
        <AuthInput type="login" page="auth" />
        <AuthInput type="password" page="auth" />
        <AuthInput type="confirm" page="auth" />
        <Button onClick={signUpRequest} value="registerBtn" />
        <CustomLink path="/" title="toAuth" />
      </StAuthView>
      {redirect}
    </StAuthContainer>
  );
};

export default RegPage;

RegPage.propTypes = {
  message: PropTypes.string.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};
