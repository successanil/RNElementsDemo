
import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './DeliveryLocation.style.ios';
import stylesAndroid from './DeliveryLocation.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
