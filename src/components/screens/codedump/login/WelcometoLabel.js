import React from "react";
import { Image, Text, View } from "react-native";
import styles from './WelcometoLabel.style';



const WelcomeToLabel = () => {
  return (
    <View>
      <Text style={styles.welcomeToText}>Welcome to</Text>
      <Text style={styles.starDeliveryText}>STAR DELIVERY</Text>
    </View>
  );
};

export default WelcomeToLabel;
