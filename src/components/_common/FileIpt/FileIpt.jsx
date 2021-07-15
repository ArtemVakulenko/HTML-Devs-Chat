import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks';
import { toBase64 } from 'helpers';
import { StFileIpt } from '../../Rooms/CreateRoomModal/ModalIpts/styled';

const FileIpt = ({ value, onChange }) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  const onFileChange = async (e) => {
    const file = await toBase64(e.target.files[0]);
    onChange(e.target.files[0].name, file);
  };
  return (
    <>
      <StFileIpt htmlFor="upload" colors={colors} theme={theme}>{value || t('chooseFile')}</StFileIpt>
      <input type="file" id="upload" hidden onChange={onFileChange} />
    </>
  );
};

export default FileIpt;

FileIpt.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
