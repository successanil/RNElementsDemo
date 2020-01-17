import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Verify.style.ios';
import stylesAndroid from './Verify.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
