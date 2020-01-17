// Import libraries for making a component
import React,{Component} from "react";
import { Image, ScrollView,Text, View, TouchableOpacity } from "react-native";
import styles from "./Signup.style";
import CreateAccountPanel from "./CreateAccountPanel";
import SignupPanelForm from "./SignupPanelForm";
import { Header } from "../commonappui/header/Header";

// Make a component

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";

import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
class Signup extends Component{

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.addStartIndexToData(31); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(31);
    this.props.addStartIndexToStackData(startIndexArr);
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
        <ScrollView>
        <View style={styles.container1}>
          <CreateAccountPanel
          textOne={'CREATE ACCOUNT'}
          textTwo={'Create an account with new phone number'}
            iconImg={require("../../../assets/img/coffee_cup.png")}
          />
          <View style={styles.dummySpacingLayout} />
          <View style={{ padding: "5%" }}>
            <SignupPanelForm
              forgotPasswordClickHandler={() => {
                alert("Forgot pass clicked");
              }}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.createAccountBtnLayout} onPress={
            ()=>{
              this.props.navigation.navigate('Verify')
            }
          }>
            <View style={styles.createAccountBtnLayout}>
              <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>
            By creating account, you accept terms and conditions
          </Text>
        </View>
        </ScrollView>
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
  PrintUtils.printLogWithClassName('Mapping Signup state',state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addStartIndexToData: index => {
      dispatch(addStartIndex(index));
    },
    addStartIndexToStackData: dataArr => {
      dispatch(addStartIndexToScreenStack(dataArr));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
