import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'constants';
import FileIpt from 'src/components/_common/FileIpt';
import { StChangePhoto } from './styled';

const ChangePhoto = ({ img, value, setUserImg }) => (
  <StChangePhoto>
    <img src={img || icons.defaultUserIcon} />
    <FileIpt value={value} onChange={setUserImg} />
  </StChangePhoto>
);

export default ChangePhoto;

ChangePhoto.propTypes = {
  img: PropTypes.string,
  value: PropTypes.string,
  setUserImg: PropTypes.func.isRequired,
};
