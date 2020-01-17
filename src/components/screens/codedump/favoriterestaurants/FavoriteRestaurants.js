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
import FoodList from "../commonappui/FoodList";
import styles from "./FavoriteRestaurants.style";
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

class FavoriteRestaurants extends Component {
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
    this.props.addStartIndexToData(131); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(131);
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

  static navigationOptions = {
    title: "",
    headerStyle: {
      elevation: 0,
      gestureEnabled:false
    }
  };

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
        key: "Manage Address",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/more_icon.png"),
        rightarrow: require("../../../assets/img/right_arrow.png")
      },
      {
        backgroundColor: "#FFF",
        key: "Payment",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/r_icon.png"),
        rightarrow: require("../../../assets/img/right_arrow.png")
      },
      {
        backgroundColor: "#FFF",
        key: "Favorites",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/fav_icon.png"),
        rightarrow: require("../../../assets/img/right_arrow.png")
      },
      {
        backgroundColor: "#FFF",
        key: "Referrals",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/referal_icon.png"),
        rightarrow: require("../../../assets/img/right_arrow.png")
      },
      {
        backgroundColor: "#FFF",
        key: "Offers",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/offer_icon.png"),
        rightarrow: require("../../../assets/img/right_arrow.png")
      }
    ];

    const dataSourceRecentSearches = [
      {
        backgroundColor: "#FFF",
        key: "Hush Restaurant",
        title: "393, Seventh street, durga ...",
        profilepic: require("../../../assets/img/history.png")
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Brown burger",
        title: "488, Eight street",
        profilepic: require("../../../assets/img/history.png")
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <View style={{ display: this.state.displayHeader }}>
          <Header
            headerText=""
            displayHomeAddress={"none"}
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
                this.props.navigation.navigate("More");
              }
            }}
          />
        </View>
       
        <ScrollView style={{ display: this.state.displaySV }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.locationTextLayout}>
                <Text style={styles.locationText}>Favourite Restaurants</Text>
                <Text style={styles.locationSubText}>
                  List of all favourite restaurants
                </Text>
              </View>
            </View>
            <View style={[styles.container, { height: "100%" }]}>
            <View
              style={{
                borderRadius: 1,
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#E8E8E8"
              }}
            />
            <FoodList
              dataSource={dataSourceSavedAddress}
              orientationHorizontal={false}
              numColumns={1}
              itemType={19}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={viewNumber => {
                
                  this.props.navigation.navigate("RestaurantProfileDashboard");
                
              }}
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
)(FavoriteRestaurants);
