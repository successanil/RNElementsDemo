// Import libraries for making a component
import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  BackHandler,
  Alert,
  Modal,
  TouchableOpacity
} from "react-native";
import FoodList from "../commonappui/FoodList";
import styles from "./PaymentMethods.style";
import { Header } from "../commonappui/header/Header";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";
import Search from "../search/Search";
import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
import SearchCompleted from "../search/SearchCompleted";

class AddNewCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHeader: "flex",
      displaySV: "flex",
      displayLayout: 0,
      modalVisible: false
    };
  }
  componentDidMount() {
    this.props.addStartIndexToData(92); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(92);
    this.props.addStartIndexToStackData(startIndexArr);
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  displayMiddleLayout() {
    if (this.state.displayLayout == 0) {
      return this.displayNormalLayout();
    } else if (this.state.displayLayout == 2) {
      return this.displaySearchScreen();
    } else if (this.state.displayLayout == 21) {
      return this.displaySearchCompletedScreen();
    }
  }

  displaySearchScreen() {
    return (
      <Search
        navigation={this.props.navigation}
        searchCompletedHandler={() => {
          this.setState({
            displaySV: "none",
            displayHeader: "none",
            displayLayout: 21
          });
        }}
      />
    );
  }

  displaySearchCompletedScreen() {
    return <SearchCompleted navigation={this.props.navigation} />;
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        {this.displayMiddleLayout()}
        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            backgroundColor: "#FFF"
          }}
        ></View>
      </View>
    );
  }

  displayNormalLayout() {
    const dataSourceSavedAddress = [
      {
        backgroundColor: "#FFF",
        key: "Amazon Pay",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/amazon-pay-card-logo.png"),
        rightarrow: require("../../../assets/img/right_arrow.png"),
        linkStatus: "LINKED",
        subTitle: "Get 10% cashback on payment above Rs 99"
      },
      {
        backgroundColor: "#FFF",
        key: "Paypal",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/paypal_logo.png"),
        rightarrow: require("../../../assets/img/right_arrow.png"),
        linkStatus: "LINK NOW",
        subTitle: ""
      },
      {
        backgroundColor: "#FFF",
        key: "Paytm",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/paytm_logo.png"),
        rightarrow: require("../../../assets/img/right_arrow.png"),
        linkStatus: "LINK NOW",
        subTitle: ""
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <View style={{ display: this.state.displayHeader }}>
          <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley="none"
            displaySearchIcon="none"
            displayHomeAddressDownArrow={"none"}
            headerTitle={["ADD NEW CARD", "1 item to pay : Rs 280"]}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                AppUtils.backScreenFetch(
                  this.props.startIndexStack,
                  lastScreen => {
                    if (lastScreen == 71) {
                      this.props.navigation.navigate("More");
                    } else if (lastScreen == 91) {
                      this.props.navigation.navigate("PaymentMethods");
                    }
                  }
                );
              }
            }}
          />
        </View>
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={[styles.container, { height: "100%" }]}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <TextInput
                  placeholder={"CARD NUMBER"}
                  style={styles.textInputStyle1}
                />
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    placeholder={"VALID THROUGH(MM/YY)"}
                    style={styles.textInputStyle2}
                  />
                  <TextInput
                    placeholder={"CVV"}
                    style={styles.textInputStyle3}
                  />
                </View>
                <TextInput
                  placeholder={"NAME ON CARD"}
                  style={styles.textInputStyle1}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <View style={{ flexDirection: "row", marginTop: 32 }}>
                  <View>
                    <Image
                      source={require("../../../assets/img/verified_payment.png")}
                      resizeMode={"center"}
                      style={styles.locationIcon}
                    />
                  </View>
                  <View>
                    <Text style={[styles.locationSubText, { marginLeft: 10 }]}>
                      Securely save card details
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    applyButtonHandler();
                  }}
                  style={styles.applyLayout}
                >
                  <View>
                    <Text style={{ color: "#FFF" }}>APPLY</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row",marginTop:32}}>
              <Image
                source={require("../../../assets/img/visa_icon.png")}
                resizeMode={"center"}
                style={styles.ccLogo}
              />
              <Image
                source={require("../../../assets/img/mastercard_big.png")}
                resizeMode={"center"}
                style={styles.ccLogo}
              />
              <Image
                source={require("../../../assets/img/discover_logo.png")}
                resizeMode={"center"}
                style={styles.ccLogo}
              />

              <Image
                source={require("../../../assets/img/paypal_logo.png")}
                resizeMode={"center"}
                style={styles.ccLogo}
              />
              <Image
                source={require("../../../assets/img/citi.png")}
                resizeMode={"center"}
                style={styles.ccLogo}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onTabPressed(index) {
    // alert(index);
    // index 0 home
    // 1 offers_tab
    // 2 search_tab
    //3 cart_icon
    //4 more_tab
    if (index == 2) {
      this.setState({
        displaySV: "none",
        displayHeader: "none",
        displayLayout: index
      });
      // this.props.navigation.navigate('Search');
    } else if (index == 0) {
      this.setState({
        displaySV: "flex",
        displayHeader: "flex",
        displayLayout: index
      });
    }
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
  PrintUtils.printLogWithClassName("Mapping Dashboard state", state);
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
)(AddNewCards);
