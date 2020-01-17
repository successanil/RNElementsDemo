import React from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from './SocialLoginForm.style'
const SocialLoginForm = props => {
  const { forgotPasswordClickHandler,loginButtonHandler } = props;
  return (
    <View>
      <View style={{height:'70%'}}>
        <TouchableOpacity
        onPress={ () => {
           loginButtonHandler();
        }}
        >
          <View style={styles.socialButtonFacebookLayoutInner}>
            <Image source={require('../../../assets/img/fbicon.png')} resizeMode={'center'} style={styles.facebookImageStyle}/>
            <Text style={styles.loginTextStyle}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <View style={{height:16}}/>
        <TouchableOpacity
        onPress={ () => {
           loginButtonHandler();
        }}
        >
          <View style={styles.socialButtonGoogleLayoutInner}>
          <Image source={require('../../../assets/img/googleicon.png')} resizeMode={'center'} style={styles.facebookImageStyle}/>
          <Text style={styles.loginTextStyle}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SocialLoginForm;
