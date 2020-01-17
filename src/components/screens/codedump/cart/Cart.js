// Import libraries for making a component
import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
  Modal,
  TouchableOpacity
} from "react-native";
import FoodList from "../../commonappui/FoodList";
import styles from "./Cart.style";
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

class Cart extends Component {
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
    this.props.addStartIndexToData(51); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(51);
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
    return <View style={{ height: "100%" }}>{this.displayMiddleLayout()}</View>;
  }

  displayNormalLayout() {
    var radio_props = [
      { label: "Relevance", value: 0 },
      { label: "Cost For Two", value: 1 },
      { label: "Delivery Time", value: 2 },
      { label: "Rating", value: 3 }
    ];
    const dataSource = [
      {
        backgroundColor: "#FFF",
        key: "Anil",
        title: "Sort",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Sunil",
        title: "Cusines",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Kittu",
        title: "Offer & More",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Reyansh",
        title: "DIRECTOR",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      }
    ];

    const dataSourceFilterMenu = [
      {
        backgroundColor: "#FFF",
        key: "Anil",
        title: "Sort",
        itemTextColor: "#000",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Sunil",
        title: "Cusines",
        itemTextColor: "#777779",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Kittu",
        itemTextColor: "#777779",
        title: "Offer & More",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      }
    ];

    return (
      <View style={{ height: "100%" }}>
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
                  if (lastScreen == 71) {
                    this.props.navigation.navigate("More");
                  } else if (lastScreen == 11) {
                    this.props.navigation.navigate(
                      "RestaurantProfileDashboard"
                    );
                  } else if (lastScreen == 3) {
                    this.props.navigation.navigate("Dashboard");
                  } else if (lastScreen == 141) {
                    this.props.navigation.navigate("Dashboard");
                  }
                }
              );
            }
          }}
        />

        <View style={styles.container1}>
          <Text style={styles.topRestaurantText}>CART (Lunchbox)</Text>
          <Text style={styles.roadNameText}>Vadiwadi Road</Text>
          <View
            style={{
              borderRadius: 1,
              marginTop: styles.verticalMarginForScreen,
              borderWidth: 1,
              borderColor: "#E8E8E8"
            }}
          />
        </View>
        <ScrollView style={{ height: "100%" }}>
          <View style={[styles.container2]}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  source={require("../../../assets/img/nonveg.png")}
                  style={{ width: 16, height: 16 }}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles.dishName}>Paneer Biryani</Text>
                <Text style={styles.price}>Rs 220</Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  borderRadius: 1,
                  borderStyle: "dashed",
                  marginTop: styles.verticalMarginForScreen,
                  marginBottom: styles.verticalMarginForScreen,
                  borderWidth: 1,
                  borderColor: "#E8E8E8"
                }}
              />
              <Text style={styles.instructions}>
                Any Instructions we promise to pass them on
              </Text>
            </View>
          </View>
          <View style={styles.container3}>
            <View
              style={{
                borderRadius: 1,
                marginTop: 16,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: "#1c1a2f"
              }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "20%" }}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require("../../../assets/img/applycoupon.png")}
                  resizeMode={"center"}
                />
              </View>
              <View style={{ width: "60%" }}>
                <Text>APPLY COUPON</Text>
              </View>
              <View style={{ width: "20%", alignItems: "flex-end" }}>
                <Image
                  source={require("../../../assets/img/right_arrow.png")}
                  resizeMode={"center"}
                />
              </View>
            </View>
            <View
              style={{
                borderRadius: 1,
                marginTop: 16,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: "#1c1a2f"
              }}
            />
          </View>
          <View style={styles.container4}>
            <Text style={styles.billStyleBold}>BILL DETAILS</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'75%'}}>
              <Text style={styles.billStyle}>Item Total</Text>
              </View>
              <View style={{width:'25%',alignItems:'flex-end'}}>
              <Text style={styles.billStyle}>Rs 220</Text>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={{width:'75%'}}>
              <Text style={{color:'#63B14A'}}>Total Discount</Text>
              </View>
              <View style={{width:'25%',alignItems:'flex-end'}}>
              <Text style={styles.billStyle}>Rs -50</Text>
              </View>
            </View>
           
            <View
              style={{
                borderRadius: 1,
                borderStyle: "dashed",
                marginTop: 8,
                marginBottom: 8,
                borderWidth: 1,
                borderColor: "#E8E8E8"
              }}
            />
            <View style={{flexDirection:'row'}}>
              <View style={{width:'75%'}}>
              <Text style={styles.billStyle}>Delivery Fee</Text>
              </View>
              <View style={{width:'25%',alignItems:'flex-end'}}>
              <Text style={styles.billStyle}>Rs 10</Text>
              </View>
            </View>
            
            <View
              style={{
                borderRadius: 1,
                borderStyle: "dashed",
                marginTop: 8,
                marginBottom: 8,
                borderWidth: 1,
                borderColor: "#E8E8E8"
              }}
            />
            <View style={{flexDirection:'row'}}>
              <View style={{width:'75%'}}>
              <Text style={[styles.billStyle]}>TOTAL</Text>
              </View>
              <View style={{width:'25%',alignItems:'flex-end'}}>
              <Text style={[styles.billStyle]}>Rs 280</Text>
              </View>
            </View>
            
            <View
              style={{
                borderRadius: 1,
                marginTop: 16,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: "#1c1a2f"
              }}
            />
          </View>

          <View style={[styles.container5]}>
            <View>
              <Text>DELIVERY ADDRESS</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: styles.verticalMarginForScreen,
                }}
              >
                <View style={{ width: "5%",position:'absolute',left:41,top:-5,elevation:5}}>
                  <Image
                    source={require("../../../assets/img/verified_payment.png")}
                    resizeMode={"center"}
                    style={{width:16,height:16}}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    alignItems:'center',
                    justifyContent:'center',
                    height:50,
                    width:50
                  }}
                >
                  <Image
                    source={require("../../../assets/img/breifcase.png")}
                    resizeMode={"center"}
                    style={styles.locationIcon}
                  />
                </View>
                <View style={styles.locationTextLayout}>
                  <Text style={styles.locationText}>Work</Text>
                  <Text style={styles.locationSubText}>
                    393, Seventh street,
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={
              () => {
                this.props.navigation.navigate('DashboardAddress');
              }
            }>
              <Text
                style={styles.changeAddress}
              >
                CHANGE ADDRESS
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row",padding:5}}>
          <View
            style={{ elevation:5,height: 50, width: "50%", backgroundColor: "#284AAD",padding:5 }}
          >
            <Text style={{ color: "#FFFFFF" }}>220</Text>
            <Text style={{ color: "#FFFFFF" }}>VIEW DETAILED BILL</Text>
          </View>
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundColor: "#63B14A",
              elevation:5
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("PaymentMethods");
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>PROCEED TO PAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onTabPressed(index) {
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
  PrintUtils.printLogWithClassName("Mapping Recommended state", state);
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
)(Cart);
