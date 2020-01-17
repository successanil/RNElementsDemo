import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './RestaurantProfileDashboard.style.ios';
import stylesAndroid from './RestaurantProfileDashboard.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
