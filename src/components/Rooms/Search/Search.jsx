import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/_common/Input';
import { StSearchContainer } from './styled';

const Search = ({ value, onChange }) => (
  <StSearchContainer>
    <Input
      value={value}
      onChange={onChange}
      placeholder='search'
    />
  </StSearchContainer>
);

export default Search;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
