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
  TouchableOpacity,
  StatusBar
} from "react-native";
import FoodList from "../commonappui/FoodList";
import styles from "./Dashboard.style";
import { Header } from "../commonappui/header/Header";
import FilterPresentational from "../filter/FilterPresentational";
import BottomNavigationTabs from "./BottomNavigationTabs";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";
import Search from "../search/Search";
import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
import SearchCompleted from "../search/SearchCompleted";

class Dashboard extends Component {
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
    this.props.addStartIndexToData(3); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(3);
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
    return (
      <SearchCompleted
        navigation={this.props.navigation}
        onSearchCancelled={this.searchCompletedCancelled.bind(this)}
      />
    );
  }

  searchCompletedCancelled() {
    this.setState({
      displaySV: "none",
      displayHeader: "none",
      displayLayout: 2
    });
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
      <View>
        <View style={{ display: this.state.displayHeader }}>
          <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"flex"}
            displayBackButton={"none"}
            displaySmiley="flex"
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
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <FilterPresentational
            radioSelectHandler={res => {
              alert(res.value);
            }}
            cancelButtonHandler={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            applyButtonHandler={() => {
              alert("filter applied");
            }}
            radio_props={radio_props}
            dataSource={dataSourceFilterMenu}
          />
        </Modal>
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={styles.container}>
            <FoodList
              dataSource={dataSource}
              orientationHorizontal={false}
              numColumns={2}
              itemType={2}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={() => {
                this.props.navigation.navigate("Offers");
              }}
            />
            <View style={styles.topView}>
              <View style={[styles.topRestaurantText,{flexDirection:'row'}]}>
              <Text>
                Top 47 Restaurants 
              </Text>
              <Text style={{color:'#F86C44',marginLeft:5}}>
                 near by
              </Text>
              </View>
              <View
                style={{
                  width:'100%',
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={{ justifyContent: "flex-end",flexDirection: "row", alignItems: "center" }}
                >
                  <Image
                    source={require("../../../assets/img/filter.png")}
                    resizeMode={"center"}
                    style={styles.filterIcon}
                  />
                  <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
                
              </View>
            </View>

            <FoodList
              dataSource={dataSource}
              orientationHorizontal={false}
              numColumns={1}
              itemType={0}
              itemwrapper={{ marginTop: 16 }}
              itemClickHandler={() => {
                this.props.navigation.navigate("RestaurantProfileDashboard");
              }}
            />
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
    } else if (index == 4) {
      // this.setState({
      //   displaySV: "none",
      //   displayHeader: "none",
      //   displayLayout: index
      // });
      this.props.navigation.navigate("More");
    } else if (index == 1) {
      this.props.navigation.navigate("Offers");
    } else if (index == 3) {
      this.props.navigation.navigate("Cart");
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
)(Dashboard);
