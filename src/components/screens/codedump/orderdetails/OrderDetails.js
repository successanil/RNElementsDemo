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
import styles from "./OrderDetails.style";
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
import { thisExpression } from "@babel/types";

class OrderDetails extends Component {
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
    this.props.addStartIndexToData(141); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(141);
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
        key: "Pavbhaji x 2",
        title:
          "393, Seventh street, durga nagar, Maletiost near lax road, malahar point ,mumbai",
        profilepic: require("../../../assets/img/breifcase.png")
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Extra Bun x 4",
        title:
          "393, Seventh street, durga nagar, Maletiost near lax road, malahar point ,mumbai",
        profilepic: require("../../../assets/img/location_marker.png")
      }
    ];

    const dataSourceBilledItems = [
      {
        backgroundColor: "#FFF",
        key: "Pavbhaji",
        itemName: "Pavbhaji",
        itemQty: 2,
        itemUnitPrice: 100
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Extra Bun",
        itemName: "Extra Bun",
        itemQty: 2,
        itemUnitPrice: 20
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
            headerTitle={["ORDER # 3872868123", "Delivered | 2 items | Rs 200"]}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                AppUtils.backScreenFetch(
                  this.props.startIndexStack,
                  lastScreen => {
                    if (lastScreen == 81) {
                      this.props.navigation.navigate("OrderHistory");
                    }
                  }
                );
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 16,
            height: 2,
            backgroundColor: "#BDC0C5"
          }}
        />
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={[styles.container, { height: "100%" }]}>
            <FoodList
              dataSource={dataSourceSavedAddress}
              orientationHorizontal={false}
              numColumns={1}
              itemType={21}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={() => {
                this.props.navigation.navigate("MoreSavedAddress");
              }}
            />
            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                height: 1,
                backgroundColor: "#BDC0C5"
              }}
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 16,
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../../assets/img/verified_payment.png")}
                  resizeMode={"center"}
                  style={styles.locationIcon}
                />
                <Text style={{ paddingLeft: 5 }}>
                  Order delivered on 18 january, 2019 at 8.40 pm
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                height: 15,
                backgroundColor: "#BDC0C5"
              }}
            />

            <View>
              <Text style={{ color: "#000" }}>Your ORDER</Text>
              <FoodList
                dataSource={dataSourceBilledItems}
                orientationHorizontal={false}
                numColumns={1}
                itemType={22}
                itemwrapper={{ marginTop: 16 }}
                itemClickHandler={() => {}}
              />
            </View>

            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                height: 0.5,
                backgroundColor: "#BDC0C5"
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "70%" }}>
                <Text
                  style={styles.subtotal}
                >
                  Subtotal
                </Text>
                <Text
                  style={styles.rsStyle}
                >
                  Discounted Delivery charge
                </Text>
              </View>

              <View style={{ width: "30%", alignItems: "flex-end" }}>
                <Text
                  style={styles.subtotal}
                >
                  Rs 240
                </Text>
                <Text
                  style={styles.rsStyle}
                >
                  Rs 10
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                height: 0.5,
                backgroundColor: "#BDC0C5"
              }}
            />
            <View style={{flexDirection:'row'}}>
            <View style={{width:'70%'}}>
              <Text
                style={styles.subtotal}
              >
                Discount Applied(STAR 50)
              </Text>
            </View>
            <View style={{width:'30%',alignItems:'flex-end'}}>
              <Text
                style={styles.subtotal}
              >
                Rs -50
              </Text>
            </View>
            </View>

            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                height: 0.5,
                backgroundColor: "#BDC0C5"
              }}
            />

<View style={{flexDirection:'row'}}>
            <View style={{width:'70%'}}>
              <Text
                style={styles.paidViaCashStyle}
              >
                Paid Via Cash
              </Text>
            </View>
            <View style={{width:'30%',alignItems:'flex-end'}}>
              <Text
                style={styles.subtotal}
              >
                TOTAL Rs 400
              </Text>
            </View>
            </View>

            <TouchableOpacity onPress={
              ()=>{
                this.props.navigation.navigate('Cart');
              }             
            }> 
            <View style={styles.reorderLayout}>
              <Text style={{ color: "#FFF" }}>RE ORDER</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.needHelpLayout}>
              <Text style={{ color: "#FFF" }}>NEED HELP ?</Text>
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
)(OrderDetails);
