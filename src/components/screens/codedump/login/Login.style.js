import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Login.style.ios';
import stylesAndroid from './Login.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
