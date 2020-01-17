import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './Dashboard.style.ios';
import stylesAndroid from './Dashboard.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
