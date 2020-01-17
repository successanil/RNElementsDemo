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
import styles from "./More.style";
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

class More extends Component {
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
    this.props.addStartIndexToData(71); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(71);
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
          
        </View>
      </View>
    );
  }

  displayNormalLayout() {
    const dataSourceSavedAddress = [
      {
        backgroundColor: "#FFF",
        key: "Manage Address",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/more_icon.png'),
        rightarrow:require('../../../assets/img/right_arrow.png')
      },
      {
        backgroundColor: "#FFF",
        key: "Payment",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/r_icon.png'),
        rightarrow:require('../../../assets/img/right_arrow.png')
      },
      {
        backgroundColor: "#FFF",
        key: "Favorites",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/fav_icon.png'),
        rightarrow:require('../../../assets/img/right_arrow.png')
      },
      {
        backgroundColor: "#FFF",
        key: "Referrals",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/referal_icon.png'),
        rightarrow:require('../../../assets/img/right_arrow.png')
      },
      {
        backgroundColor: "#FFF",
        key: "Offers",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/offer_icon.png'),
        rightarrow:require('../../../assets/img/right_arrow.png')
      }

    ];

    const dataSourceRecentSearches = [
      {
        backgroundColor: "#FFF",
        key: "Hush Restaurant",
        title: "393, Seventh street, durga ...",
        profilepic:require('../../../assets/img/history.png')
      },
      {
        backgroundColor: "#f3f4f6",
        key: "Brown burger",
        title: "488, Eight street",
        profilepic:require('../../../assets/img/history.png')
      }
    ];




    return (
      <View style={{flex: 1}}>
        <View style={{ display: this.state.displayHeader }}>
          <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley="none"
            displaySearchIcon="none"
            displayHomeAddressDownArrow={"none"}
            headerTitle={["JOHN WOOSH", "31873 | john@gmail.com"]}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                AppUtils.backScreenFetch(
                this.props.startIndexStack,
                lastScreen => {
                  PrintUtils.showAlertForBackScreen(lastScreen);
                  if (lastScreen == 3) {
                    this.props.navigation.navigate("Dashboard");
                  }
                }
              );
              }
            }}
          />
        </View>
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={[styles.container,{height:'100%'}]}>
          <View style={{marginTop:16,marginBottom:16,height:2,backgroundColor:'#1c1a2f'}}/>
            <View style={{flexDirection:'row'}}>
              <View>
                <Image 
                 source={require("../../../assets/img/location.png")}
                 style={styles.locationIcon}
                />
              </View>
              <View style={styles.locationTextLayout}>
                <Text style={styles.locationText}>MY ACCOUNTS</Text>
                <Text style={styles.locationSubText}>Addresses,Payments,Favorites,Redressal,Offers</Text>
              </View>
            </View>
            <View style={{borderRadius:1,borderStyle:'dashed',marginTop:16,borderWidth:1,borderColor:'#E8E8E8'}}/>
            <FoodList
              dataSource={dataSourceSavedAddress}
              orientationHorizontal={false}
              numColumns={1}
              itemType={17}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={(viewNumber) => {
                if(viewNumber == 0){
                  this.props.navigation.navigate("MoreSavedAddress");
                } else if(viewNumber == 1){
                  this.props.navigation.navigate("PaymentMethods");
                } else if(viewNumber == 2){
                  this.props.navigation.navigate("FavoriteRestaurants");
                }
              }}
            />
            <View style={{marginTop:16,marginBottom:16,height:2,backgroundColor:'#1c1a2f'}}/>
            <View style={{flexDirection:'row'}}>
              <View>
                <Text style={styles.locationText}>HELP</Text>
                <Text style={styles.locationSubText}>Addresses,Payments,Favorites,Redressal,Offers</Text>
              </View>
            </View>

            <View style={{marginTop:16,marginBottom:16,height:2,backgroundColor:'#1c1a2f'}}/>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={
                ()=>{
                  this.props.navigation.navigate('OrderHistory')
                }
              }>
              <View>
                <Text style={styles.locationText}>RECENT ORDERS</Text>
                <Text style={styles.locationSubText}>Addresses,Payments,Favorites,Redressal,Offers</Text>
              </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop:32,marginBottom:16,height:20,backgroundColor:'#E4E5E8'}}/>
            <View style={{flexDirection:'row'}}>
              
              <View>
                <Text style={styles.locationText}>LOGOUT</Text>
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
)(More);
