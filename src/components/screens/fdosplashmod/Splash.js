// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';
import styles from './Splash.style';
import Logo from '../../../assets/img/toast_logo.svg';

// Make a Dumb Presentational component
const Splash = props => {
  setTimeout(() => {
    props.navigation.navigate('NotificationsPage');
  }, 1000);

  return (
    <View style={styles.container}>
      <Logo width={styles.logoStyle.width} height={styles.logoStyle.height} />
      <View style={styles.starDeliveryContainer}>
        <Text style={styles.starDeliveryText}>TOAST UI</Text>
      </View>
    </View>
  );
};

// Make the component available to other parts of the app
export {Splash};
