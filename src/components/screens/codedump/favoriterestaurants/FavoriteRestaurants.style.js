import {Platform, StyleSheet} from 'react-native';
import stylesIOS from './FavoriteRestarurants.style.ios';
import stylesAndroid from './FavoriteRestaurants.style.android';

styles = '';
if(Platform.OS === 'ios'){
  styles = stylesIOS
} else {
  styles = stylesAndroid
}

export default styles;
