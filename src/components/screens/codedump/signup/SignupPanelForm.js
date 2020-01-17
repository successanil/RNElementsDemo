import React, { Component } from "react";
import { ScrollView,Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./SignupPanelForm.style";

class SignupPanelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true
    };
  }

  render() {
    return (
      
      <View style={styles.panelContainer}>
        <Text style={{ fontSize: 10 }}>CREATE ACCOUNT</Text>

        <TextInput
          placeholder={"Enter 10 Digit mobile number"}
          style={styles.textInputStyle}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          placeholder={"Enter Your Full Name"}
          style={styles.textInputStyle}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          placeholder={"Enter Email ID"}
          style={styles.textInputStyle}
          onChangeText={text => this.setState({ text })}
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

        <View
          style={{ flexDirection: "row", marginTop: 32, alignItems: "center" }}
        >
          <Image
            source={require("../../../assets/img/rectangle_check.png")}
            style={{ marginRight: 16, width: 24, height: 24 }}
          />
          <Text>I have referral code</Text>
        </View>
      </View>
      
    );
  }
}

export default SignupPanelForm;
