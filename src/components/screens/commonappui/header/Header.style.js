import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Header.style.ios';
import stylesAndroid from './Header.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
