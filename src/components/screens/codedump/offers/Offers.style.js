import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Offers.style.ios';
import stylesAndroid from './Offers.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
