import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './More.style.ios';
import stylesAndroid from './More.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;