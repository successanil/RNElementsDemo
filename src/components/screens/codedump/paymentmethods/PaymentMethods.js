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
import FoodList from "../../commonappui/FoodList";
import styles from "./PaymentMethods.style";
import { Header } from "../../commonappui/header/Header";

import { connect } from "react-redux";
import AppUtils from "../../../../utils/AppUtils";
import PrintUtils from "../../../../utils/PrintUtils";
import Search from "../search/Search";
import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../../actions/index";
import SearchCompleted from "../search/SearchCompleted";
import { thisExpression } from "@babel/types";

class PaymentMethods extends Component {
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
    this.props.addStartIndexToData(91); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(91);
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
        linkStatusColor:'#65B14C',
        subTitle: "Get 10% cashback on payment above Rs 99"
      },
      {
        backgroundColor: "#FFF",
        key: "Paypal",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/paypal_logo.png"),
        rightarrow: require("../../../assets/img/right_arrow.png"),
        linkStatus: "LINK ACCOUNT",
        linkStatusColor:'#284AAD',
        subTitle: ""
      },
      {
        backgroundColor: "#FFF",
        key: "Paytm",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/paytm_logo.png"),
        rightarrow: require("../../../assets/img/right_arrow.png"),
        linkStatus: "LINK ACCOUNT",
        linkStatusColor:'#284AAD',
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
            headerTitle={["PAYMENTS", "1 item to pay : Rs 280"]}
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
                    } else if (lastScreen == 51) {
                      this.props.navigation.navigate("Cart");
                    }
                  }
                );
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: styles.verticalMarginForScreen,
            marginBottom: styles.verticalMarginForScreen,
            height: 2,
            backgroundColor: "#BDC0C5"
          }}
        />
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={[styles.container, { height: "100%" }]}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.locationText}>WALLETS</Text>
              </View>
            </View>
            <FoodList
              dataSource={dataSourceSavedAddress}
              orientationHorizontal={false}
              numColumns={1}
              itemType={18}
              itemwrapper={{ marginTop: styles.verticalMarginForScreen }}
              itemClickHandler={() => {
                this.props.navigation.navigate("MoreSavedAddress");
              }}
            />
            <View style={{ flexDirection: "row",paddingTop:styles.verticalMarginForScreen }}>
              <View>
                <Text style={styles.locationText}>CREDIT/DEBIT CARD</Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: styles.verticalMarginForScreen,
                      paddingTop: styles.verticalMarginForScreen
                    }}
                  >
                    <View style={{ width: "10%" }}>
                      <Image
                        source={require("../../../assets/img/mastercard_logo.png")}
                        resizeMode={"center"}
                        style={styles.locationIcon}
                      />
                    </View>
                    <View style={[styles.locationTextLayout, { width: "70%" }]}>
                      <Text style={styles.locationText}>
                        3432-XXXXXXXXX-1234
                      </Text>
                      <View style={{ flexDirection: "row", paddingTop: 16 }}>
                        <TextInput style={styles.ccTextInputStyle1} placeholder={'CVV'}></TextInput>
                        <Text style={styles.ccTextInputStyle2}>
                          MAKE PAYMENTS
                        </Text>
                      </View>
                    </View>
                    <View style={{ width: "20%" }}>
                      <Text style={styles.locationSubText}></Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                // marginTop: 16,
                marginBottom: styles.verticalMarginForScreen,
                height: 1,
                backgroundColor: "#BDC0C5"
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("AddNewCards");
                }}
              >
                <View style={{ flexDirection: "row",justifyContent:'center'}}>
                  <View
                    style={{
                      borderColor: "#DA9C6D",
                      borderWidth: 1.5,
                      borderRadius:2,
                      width: 20,
                      alignItems:'center',
                      justifyContent:'center',
                      height: 20
                    }}
                  >
                    <Text style={{color:'#DA9C6D',fontWeight:'bold',fontSize:16}}>+</Text>
                  </View>
                  <Text style={styles.addNewCardText}>ADD NEW CARD</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: styles.verticalMarginForScreen,
                marginBottom: styles.verticalMarginForScreen,
                height: 1,
                backgroundColor: "#BDC0C5"
              }}
            />

            <View style={{ marginBottom: styles.verticalMarginForScreen }}>
              <Text style={styles.locationText}>PAY ON DELIVERY</Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: styles.verticalMarginForScreen
                }}
              >
                <View style={{ width: "5%"}}>
                  <Image
                    source={require("../../../assets/img/r_icon.png")}
                    resizeMode={"center"}
                    style={styles.locationIcon}
                  />
                </View>
                <View style={[styles.locationTextLayout, {marginLeft:10,width: "90%" }]}>
                  <Text style={styles.locationText}>Cash</Text>
                  <Text style={styles.locationSubText}>
                    Please keep extra change when delivery boy arrives.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("TrackingOrder");
                    }}
                  >
                      <View style={[styles.payWithCashLayout]}>
                      <Text style={styles.payWithCash}>PAY WITH CASH</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "5%"}}>
                  <Image
                    source={require("../../../assets/img/verified_payment.png")}
                    resizeMode={"center"}
                    style={{width:16,height:16}}
                  />
                </View>
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
)(PaymentMethods);
