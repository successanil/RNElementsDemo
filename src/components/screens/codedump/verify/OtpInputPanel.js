import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import styles from "./OtpInputPanel.style";

const OtpInputPanel = props => {
  const { iconImg, textOne, textTwo, enteredOtpHandler } = props;
  otpText = "";
  firstTextInputRef = "";
  secondTextInputRef = "";
  thirdTextInputRef = "";
  fourthTextInputRef = "";
  return (
    <View style={styles.container}>
      <TextInput
        ref={input => {
          firstTextInputRef = input;
        }}
        style={styles.textInputStyle}
        keyboardType={"numeric"}
        caretHidden={true}
        maxLength={1}
        onChangeText={(text) => {
            otpText += text
            secondTextInputRef.focus();
          }}
      />
      <TextInput
        ref={input => {
          secondTextInputRef = input;
        }}
        style={styles.textInputStyle}
        caretHidden={true}
        keyboardType={"numeric"}
        maxLength={1}
        onChangeText={(text) => {
           otpText += text
           thirdTextInputRef.focus();
         }}
      />
      <TextInput
        ref={input => {
          thirdTextInputRef = input;
        }}
        style={styles.textInputStyle}
        caretHidden={true}
        keyboardType={"numeric"}
        maxLength={1}
        onChangeText={(text) => {
             otpText += text
             fourthTextInputRef.focus();
           }}
      />
      <TextInput
        ref={input => {
          fourthTextInputRef = input;
        }}
        style={styles.textInputStyle}
        caretHidden={true}
        maxLength={1}
        keyboardType={"numeric"}
        onChangeText={text => {
          otpText += text;
          enteredOtpHandler(otpText);
        }}
      />
    </View>
  );
};

export default OtpInputPanel;
