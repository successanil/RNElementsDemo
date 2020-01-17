import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Recommended.style.ios';
import stylesAndroid from './Recommended.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
