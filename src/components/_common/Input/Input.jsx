import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { icons } from 'src/constants/icons';
import { StInput, StHidePass } from './styled';
import { useTheme } from '../../hooks';

const Input = ({ value, placeholder, onChange, type = 'text' }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const [passSettig, setPassSettig] = useState({
    type: 'password',
    eye: icons.showPass,
  });
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  const showHidePass = () => {
    passSettig.type === 'password'
      ? setPassSettig({ type: 'text', eye: icons.hidePass })
      : setPassSettig({ type: 'password', eye: icons.showPass });
  };
  return (
    <>
      <StInput
        type={type !== 'password' ? type : passSettig.type}
        value={value}
        theme={theme}
        colors={colors}
        onChange={handleInputChange}
        placeholder={t(placeholder)}
      />
      {type === 'password' ? <StHidePass src={passSettig.eye} onClick={showHidePass} /> : null}
    </>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
