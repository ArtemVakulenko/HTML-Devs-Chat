import { useContext } from 'react';
import { Theme } from '../hoc';
import { colors } from '../../constants/colors';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
