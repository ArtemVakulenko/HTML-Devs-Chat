import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { langs } from 'constants';
import { useTheme } from '../../hooks';
import { StSelect } from './styled';

const ChangeLang = () => {
  const [value, setValue] = useState(localStorage.getItem('lang') || 'en');
  const { colors, theme } = useTheme();
  const { i18n } = useTranslation();
  const { arabian, english, russian } = langs;
  const onChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setValue(lang);
  };

  return (
    <StSelect
      theme={theme}
      value={value}
      colors={colors}
      onChange={onChange}
    >
      <option value={english}>{english}</option>
      <option value={russian}>{russian}</option>
      <option value={arabian}>{arabian}</option>
    </StSelect>
  );
};

export default ChangeLang;
