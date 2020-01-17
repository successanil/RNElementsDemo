
import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './TrackingOrder.style.ios';
import stylesAndroid from './TrackingOrder.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
