import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Signup.style.ios';
import stylesAndroid from './Signup.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
