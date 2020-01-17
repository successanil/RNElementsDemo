import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Cart.style.ios';
import stylesAndroid from './Cart.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
