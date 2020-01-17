// Import libraries for making a component
import React, { Component } from "react";
import {
  BackHandler,
  Alert, Modal, Image, Text, View, TouchableOpacity, ScrollView
} from "react-native";
import styles from "./Login.style";
import WelcometoLabel from './WelcometoLabel';
import LoginPanelForm from './LoginPanelForm';
import SocialLoginForm from './SocialLoginForm';
import { Header } from "../commonappui/header/Header";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";

import {
  addStartIndex
} from "../../../actions/index";
import RatingPresentational from "../commonappui/RatingPresentational";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  componentDidMount() {
    this.props.addStartIndexToData(1);   // screen number
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }
  render() {
    var radio_props = [
      { label: 'param1', value: 0 },
      { label: 'param2', value: 1 }
    ];

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          
          <RatingPresentational />
        </Modal>
        

        { Platform.OS === 'ios' && <Header
            headerText=""
            displayHomeAddress={"none"}
            displayHamburger={"none"}
            displayBackButton={"none"}
            displaySmiley="none"
            displaySearchIcon="none"
            headerTitle={["HOME", "31 A , RK Flats, near Vas ..."]}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                alert("Back Pressed");
              } else if (buttonNumber == 2) {
                this.props.navigation.navigate("DashboardAddress");
              }
            }}
          />
        }
        
        <ScrollView>
          <View style={styles.container} >
            <View style={styles.skipLayout}>
              <TouchableOpacity onPress={
                () => {
                  //this.setModalVisible(!this.state.modalVisible);
                  // this.props.navigation.navigate('Filter')
                  this.props.navigation.navigate('Verify');
                  // this.props.navigation.navigate('OrderHistory');
                  // this.props.navigation.navigate('TrackingOrder');
                  // this.props.navigation.navigate('Recommended');
                  // this.props.navigation.navigate('Cart');
                  // this.props.navigation.navigate('SearchPanel');
                }
              }>
                <Text style={[styles.skipText]}>SKIP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container1}>
              <View style={styles.welcomeLayout}>
                <WelcometoLabel />
              </View>
              <View style={styles.dummySpacingLayout} />
              <LoginPanelForm
                forgotPasswordClickHandler={
                  () => {
                    alert('Forgot pass clicked');
                  }
                }

                loginButtonHandler={
                  () => {
                    this.props.navigation.navigate('Dashboard');
                  }
                }
              />
            </View>
            <View style={styles.dividerLine} />
            <View style={styles.container2}>
              <View style={styles.socialContainer1}>
                <Text style={styles.continueWithSocialText}>CONTINUE WITH SOCIAL ACCOUNTS</Text>
              </View>
              <View style={styles.socialContainer2}>
                <SocialLoginForm
                  forgotPasswordClickHandler={
                    () => {
                      alert('Forgot pass clicked');
                    }
                  }

                  loginButtonHandler={
                    () => {
                      this.props.navigation.navigate('Verify');
                    }
                  }

                />
              </View>
            </View>
            <View style={styles.dontHaveAccount}>
              <Text style={styles.dontHaveAccountText}>Don't have an account ?</Text>
              <View>
                <TouchableOpacity onPress={
                  () => {
                    this.props.navigation.navigate('Signup');
                  }

                }>
                  <Text style={styles.createNowTextStyle}>CREATE NOW</Text>
                  <View style={styles.createNowUnderLine}></View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  backPressed = () => {
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName('Mapping Login state', state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addStartIndexToData: index => {
      dispatch(addStartIndex(index));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
