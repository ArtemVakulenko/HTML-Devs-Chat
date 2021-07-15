import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../Input';
import { AuthInputContainer, AuthLabel } from './styled';

const AuthInput = ({ type, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <AuthInputContainer>
      <AuthLabel>{t(type)}</AuthLabel>
      <Input
        value={value}
        type={type === 'password' || type === 'confirm' ? 'password' : 'text'}
        onChange={onChange}
        placeholder={`${type}Ipt`}
      />
    </AuthInputContainer>
  );
};

export default AuthInput;

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
