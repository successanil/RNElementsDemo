import React, { Component } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./LoginPanelForm.style";

class LoginPanelForm extends Component {
  constructor(props) {
    super(props);
    const { forgotPasswordClickHandler, loginButtonHandler } = props;
    passwordTxt = "";
    loginTxt = "";
    this.state = {
      forgotPasswordClickHandler: forgotPasswordClickHandler,
      loginButtonHandler: loginButtonHandler,
      secureTextEntry: true
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.loginToYourAccountText}>LOGIN TO YOUR ACCOUNT</Text>
        <TextInput
          placeholder={"Enter Email ID"}
          style={styles.textInputStyle}
          onChangeText={text => (this.loginTxt = text)}
        />
        <View
          style={[
            styles.textInputStyle,
            { flexDirection: "row", width: "100%", alignItems: "center" }
          ]}
        >
          <TextInput
            secureTextEntry={this.state.secureTextEntry}
            placeholder={"Enter Password"}
            style={{ width: "80%" }}
            onChangeText={text => (this.passwordTxt = text)}
          />
          <View style={{ width: "20%", alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  secureTextEntry: !this.state.secureTextEntry
                });
              }}
            >
              <Image
                source={require("../../../assets/img/eye.png")}
                resizeMode={"center"}
                style={styles.eyeStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.forgotPasswordLayout}>
          <TouchableOpacity
            onPress={() => {
              this.state.forgotPasswordClickHandler();
            }}
          >
            <Text style={styles.forgotPasswordTextStyle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButtonLayout}>
          <TouchableOpacity
            onPress={() => {
              this.state.loginButtonHandler();
            }}
          >
            <View style={styles.loginButtonLayoutInner}>
              <Text style={styles.loginTextStyle}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: 1, height: 78 }}>
          <Text></Text>
        </View>
      </View>
    );
  }
}

export default LoginPanelForm;
