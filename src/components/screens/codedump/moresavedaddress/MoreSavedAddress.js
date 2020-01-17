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
import styles from "./MoreSavedAddress.style";
import { Header } from "../commonappui/header/Header";
import BottomNavigationTabs from "../home/BottomNavigationTabs";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";
import Search from "../search/Search";
import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
import SearchCompleted from "../search/SearchCompleted";

class MoreSavedAddress extends Component {
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
    this.props.addStartIndexToData(72); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(72);
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
        >
          <BottomNavigationTabs onTabPressed={this.onTabPressed.bind(this)} />
        </View>
      </View>
    );
  }

  displayNormalLayout() {
    const dataSourceSavedAddress = [
      {
        backgroundColor: "#FFF",
        key: "Work",
        title: "393, Seventh street, durga nagar, Maletiost near lax road, malahar point ,mumbai",
        profilepic: require("../../../assets/img/breifcase.png")
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Home",
        title: "393, Seventh street, durga nagar, Maletiost near lax road, malahar point ,mumbai",
        profilepic: require("../../../assets/img/location_marker.png")
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
            headerTitle={["SET DELIVERY LOCATION", "Search for area, street"]}
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
                    }
                  }
                );
              }
            }}
          />
        </View>
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={[styles.container, { height: "100%" }]}>
            <Text style={styles.locationText}>SAVED ADDRESSES</Text>
            <Text style={styles.locationSubText}>Manage Address</Text>
            <FoodList
              dataSource={dataSourceSavedAddress}
              orientationHorizontal={false}
              numColumns={1}
              itemType={20}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={() => {
                this.props.navigation.navigate("DeliveryLocation");
              }}
            />
            
            
            
            <TouchableOpacity style={styles.createAccountBtnLayout} onPress={
            ()=>{
              this.props.navigation.navigate('DeliveryLocation');
            }          
          }>
            <View style={[styles.createAccountBtnLayout,{backgroundColor:'#63B04A'}]}>
              <Text style={styles.createAccountText}>Add New Address</Text>
            </View>
          </TouchableOpacity>

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
)(MoreSavedAddress);
