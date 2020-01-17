
import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Orders.style.ios';
import stylesAndroid from './Orders.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
