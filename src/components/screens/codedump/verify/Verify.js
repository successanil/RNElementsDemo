
import React,{Component} from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./Verify.style";
import CreateAccountPanel from "../signup/CreateAccountPanel";
import OtpInputPanel from "./OtpInputPanel";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";
import {
  addStartIndex
} from "../../../actions/index";

import { Header } from "../commonappui/header/Header";



class Verify extends Component{



  constructor(props) {
    super(props);
    this.state={
      enterotpButtonColor:'#BDC0C6'
    }
  }

  componentDidMount(){
    this.props.addStartIndexToData(121);    // screen number
  }

  render(){
    return (
      <View style={styles.container}>
      <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley="none"
            displaySearchIcon="none"
            displayHomeAddressDownArrow={"none"}
            headerTitle={["", ""]}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                AppUtils.backScreenFetch(
                  this.props.startIndexStack,
                  lastScreen => {
                    PrintUtils.showAlertForBackScreen(lastScreen);
                    
                      this.props.navigation.navigate("Login");
                    
                  }
                );
              }
            }}
          />
        <View style={styles.container1}>
          <CreateAccountPanel
            textOne={'VERIFY NUMBER'}
            textTwo={'OTP sent to'}
            iconImg={require("../../../assets/img/mobile.png")}
            backButtonHandler={
              ()=>{
                alert('back button is pressed for verify panel');
              }
            }
          />
          <View style={styles.dummySpacingLayout} />
          <View style={{ padding: "5%" }}>
            <OtpInputPanel enteredOtpHandler={
              (otpText)=>{
                if(otpText.length >= 4){
                  // alert(otpText)
                  this.setState({
                    enterotpButtonColor:'#60B243'
                  })
                }
              }
            }/>
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.createAccountBtnLayout} onPress={
            ()=>{
              this.props.navigation.navigate('Dashboard');
            }          
          }>
            <View style={[styles.createAccountBtnLayout,{backgroundColor:this.state.enterotpButtonColor}]}>
              <Text style={styles.createAccountText}>ENTER OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#FDF9F2',
      elevation:0
    }
  };
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName('Mapping Verify state',state);
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
)(Verify);
