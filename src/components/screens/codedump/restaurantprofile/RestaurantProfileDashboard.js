// Import libraries for making a component
import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
  TouchableOpacity,
  Modal
} from "react-native";
import FoodList from "../commonappui/FoodList";
import styles from "./RestaurantProfileDashboard.style";
import { Header } from "../commonappui/header/Header";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";

import { addStartIndex, addStartIndexToScreenStack } from "../../../actions/index";

import SearchPanel from '../commonappui/SearchPanel';
import TextListPanel from '../commonappui/TextListPanel';
import ExpandableLists from '../commonappui/ExpandableLists';

class RestaurantProfileDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHeader: "flex",
      displaySV: "flex",
      modalVisible: false,
      menuModalVisible: false
    };
  }
  componentDidMount() {
    this.props.addStartIndexToData(11); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(11);
    this.props.addStartIndexToStackData(startIndexArr);
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  displayMiddleLayout() {
    return this.displayNormalLayout();
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        {this.displayMiddleLayout()}
      </View>
    );
  }

  displayNormalLayout() {
    const dataSource = [
      {
        key: "Anil",
        title: "CEO",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        key: "Sunil",
        title: "DIRECTOR",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        key: "Kittu",
        title: "DIRECTOR",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      },
      {
        key: "Reyansh",
        title: "DIRECTOR",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      }
    ];

    const dataSourceMenu = [
      {
        key: "Anil",
        title: "Salad",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        key: "Sunil",
        title: "Rice",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0"
      },
      {
        key: "Kittu",
        title: "Roti's",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      },
      {
        key: "Reyansh",
        title: "Parathas",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      },
      {
        key: "Reyansh2",
        title: "Butter Milk",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      },
      {
        key: "Reyansh3",
        title: "Punjabi Sabji",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85"
      }
    ];

    return (
      <View style={{ height: '100%' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <SearchPanel cancelButtonHandler={
            () => {
              this.setModalVisible(false);
            }
          } placeholderText={'Search Restaurant / Cafe'} searchButtonHander={
            () => {
              alert('search is pressed');
            }
          } />
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.menuModalVisible}
          onRequestClose={() => {
            this.setMenuModelVisibility(false);
          }}>
          <TextListPanel dataSource={dataSourceMenu} />
        </Modal>

        <View style={{ display: this.state.displayHeader }}>
          <Header
            headerText=""
            displaySearchIcon={'flex'}
            displayHomeAddress={"none"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley={"none"}
            styles={styles}
            headerTitle={["", ""]}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert("Hamburger Pressed");
              } else if (buttonNumber == 1) {
                AppUtils.backScreenFetch(this.props.startIndexStack, (lastScreen) => {
                  PrintUtils.showAlertForBackScreen(lastScreen);
                  if (lastScreen == 4) {
                    this.props.navigation.navigate('Offers')
                  } else if (lastScreen == 3) {
                    this.props.navigation.navigate('Dashboard')
                  } else if(lastScreen == 131){
                    this.props.navigation.navigate('FavoriteRestaurants') 
                  } else if(lastScreen == 152){
                    this.props.navigation.navigate('SearchCompleted') 
                  } else if(lastScreen == 151){
                    this.props.navigation.navigate('SearchCompleted') 
                  }

                })
              } else if (buttonNumber == 2) {
                this.setModalVisible(!this.state.modalVisible);
              }
            }}
          />
        </View>
        <ScrollView style={{ display: this.state.displaySV }}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.restuarantName}>Lunchbox</Text>
              <Image source={require('../../../assets/img/nonveg.png')} style={{ marginLeft: 5, width: 16, height: 16 }} />
              <Image source={require('../../../assets/img/veg.png')} style={{ marginLeft: 5, width: 16, height: 16 }} />
            </View>
            <Text style={styles.restuarantCusines}>North Indian,italian,deserts</Text>
            <Text style={styles.restuarantAddress}>Vadiwadi Road</Text>
            <View style={{ marginTop: 16, marginBottom: 16 }}>
              <View style={{ marginBottom: 16, borderColor: '#DADCDF', borderWidth: 0.5, borderStyle: 'dashed', borderRadius: 1 }} />
              <View style={{ flexDirection: 'row'}}>
                <View style={styles.restaurantShortSummaryStyle}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Image source={require('../../../assets/img/star.png')} style={{tintColor:'#000',width:12,height:12}} />  
                  <Text style={styles.textStyleSubHeading}>4.6</Text>
                  </View>
                  <Text style={styles.restaurantRatings}>1000+ Ratings</Text>
                </View>
                <View style={styles.restaurantShortSummaryStyle}>
                  <Text style={styles.textStyleSubHeading} >Rs 450</Text>
                  <Text style={styles.restaurantRatings}>For Two</Text>
                </View>
                <View style={styles.restaurantShortSummaryStyle}>
                  <Text style={styles.textStyleSubHeading}>30 Min</Text>
                  <Text style={styles.restaurantRatings}>Delivery Time</Text>
                </View>
              </View>
              <View style={{ marginTop: 16, borderColor: '#DADCDF', borderWidth: 0.5, borderStyle: 'dashed', borderRadius: 1 }} />
            </View>
            <View>
              <View style={styles.opensAtContainer}><Text style={styles.opensAtText}>Opens next at 11:15 am, Wednesday</Text></View>
            </View>
            <Text style={{ marginTop:16,marginBottom: 16 }}>Recommended</Text>
            <FoodList
              dataSource={dataSource}
              orientationHorizontal={false}
              numColumns={2}
              itemType={3}
              itemwrapper={styles.itemwrapper}
              itemClickHandler={(callerChild) => {
                if(callerChild == 0){
                  this.props.navigation.navigate('Recommended')
                } else if(callerChild == 1) {
                  this.props.navigation.navigate("Cart");
                }
                
              }}
            />
            <View style={styles.dividerView} />
            <ExpandableLists itemNotCollapsed={true} dataSource={
            [
              {
                key:1,
                header: 'Basmati Rice Lunchbox',
                itemCount: 4,
                childArr:[
                  {
                    key:11,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:12,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:13,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:14,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  }
                ]
              },

              {
                key:2,
                header: 'Basmati Rice Lunchbox',
                itemCount: 4,
                childArr:[
                  {
                    key:21,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:22,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:23,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:24,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  }
                ]
              },
              {
                key:3,
                header: 'Basmati Rice Lunchbox',
                itemCount: 4,
                childArr:
                [
                  {
                    key:31,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:32,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:33,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  },
                  {
                    key:34,
                    title: 'Paneer Briyani',
                    desc: 'Long grain basmati now lorme now if Long grain basmati now lorme now if Long grain basmati now lorme now if ',
                    price: 'Rs 220'
                  }
                ]
              }
            ]

          } headerView={1} childView={1}/>
          </View>
        </ScrollView>

        <View style={{ position: 'absolute', width: 200, alignSelf: 'center', alignItems: 'center', height: 80, elevation: 20, bottom: 0 }}>
          <TouchableOpacity onPress={
            () => {
              this.setMenuModelVisibility(!this.state.menuModalVisible)
            }
          }>
            <Text style={{ backgroundColor: '#FA6C3C', textAlign: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 32, paddingRight: 32, color: '#FFF', borderRadius: 20 }}>Menu</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      elevation: 0
    },
    header: null
  });

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setMenuModelVisibility(visible) {
    this.setState({
      menuModalVisible: visible
    });
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
        displayHeader: "none"
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
  PrintUtils.printLogWithClassName("Mapping RestaurantProfileDashboard state", state);
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
)(RestaurantProfileDashboard);
