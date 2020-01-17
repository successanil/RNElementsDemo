import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './OrderDetails.style.ios';
import stylesAndroid from './OrderDetails.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
