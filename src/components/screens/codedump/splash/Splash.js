// Import libraries for making a component
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Splash.style';
import AppUtils from '../../../utils/AppUtils';

// Make a Dumb Presentational component
const Splash = props => {
  AppUtils.populateReduxStateFromRealm()
    .then(result => {
      setTimeout(() => {
        props.navigation.navigate('Login');
      }, 1000);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/bg_circle.png')}
        style={{position: 'absolute', height: '130%', width: '130%'}}
      />
      <View style={styles.starDeliveryContainer}>
        <Text style={styles.starDeliveryText}>STAR DELIVERY</Text>
      </View>
      <View style={{position: 'absolute', bottom: 50, width: '100%'}}>
        <Text style={styles.starDeliveryAdditionalText}>
          INDIA'S FASTEST GROWING
        </Text>
        <Text style={styles.starDeliveryAdditionalText}>
          FODD DELIVERY PLATFORM
        </Text>
      </View>
    </View>
  );
};

// Make the component available to other parts of the app
export {Splash};
