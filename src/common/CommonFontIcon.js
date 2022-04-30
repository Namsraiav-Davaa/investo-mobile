import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';

const SvgIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const IconFile = {
  SvgIcon,
};

export default IconFile;
