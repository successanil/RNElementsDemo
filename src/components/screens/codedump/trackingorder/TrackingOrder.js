// Import libraries for making a component
import React, { Component } from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import TextWithIconListPanel from "../commonappui/TextWithIconListPanel";
import TextList from "../commonappui/TextList";
import styles from "./TrackingOrder.style";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";

import { Header } from "../commonappui/header/Header";
import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
import RatingPresentational from '../commonappui/RatingPresentational';

class TrackingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: "Anil",
          title: "Waiting for restaurant to accept order",
          profilepic: require("../../../assets/img/order_detail_waiting.png")
        },
        {
          key: "Sunil",
          title: "Waiting",
          profilepic: require("../../../assets/img/order_details_waiting_next.png")
        },
        {
          key: "Kittu",
          title: "Waiting",
          profilepic: require("../../../assets/img/order_detail_pickup.png")
        }
      ],
      container2Display: "flex",
      container3Display:'none',
      mapImgStyle: styles.bannerImgStyle
    };
  }

  componentWillMount() {
    setTimeout(() => {
      dataSource = [
        {
          key: "Anil",
          title: "Order Received",
          profilepic: require("../../../assets/img/order_detail_received_done.png")
        },
        {
          key: "Sunil",
          title: "Food is being prepared",
          profilepic: require("../../../assets/img/order_detail_food_prepare.png")
        },
        {
          key: "Kittu",
          title: "Waiting",
          profilepic: require("../../../assets/img/order_detail_pickup_next.png")
        }
      ];
      this.setState({
        dataSource: dataSource
      });
      setTimeout(() => {
        dataSource = [
          {
            key: "Anil",
            title: "Order Received",
            profilepic: require("../../../assets/img/order_detail_received_done.png")
          },
          {
            key: "Sunil",
            title: "Delivery boy picked up Order",
            profilepic: require("../../../assets/img/order_details_food_prepare_done.png")
          },
          {
            key: "Kittu",
            title: "Order Picked",
            profilepic: require("../../../assets/img/order_details_pickup_live.png")
          }
        ];
        this.setState({
          dataSource: dataSource
        });

        setTimeout(() => {
          this.setState({
            container2Display: "none",
            container3Display:'flex',
            mapImgStyle: styles.bannerImgStyleFull
          });
        }, 3000); // timeout 3 end
      }, 3000); // timeout 2 end
    }, 3000); // timeout 1 end
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        <View>
          <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley="none"
            displayHelpTextInPlaceOfSmiley={"HELP"}
            displaySearchIcon="none"
            displayHomeAddressDownArrow={"none"}
            headerTitle={["ORDER #381902939", "0.33 | 2 Items, Rs 123"]}
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
                    }
                  }
                );
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              AppUtils.backScreenFetch(
                this.props.startIndexStack,
                lastScreen => {
                  if (lastScreen == 91) {
                    this.props.navigation.navigate("PaymentMethods");
                  }
                }
              );
            }}
            style={styles.touchStyleBack}
          ></TouchableOpacity>
        </View>

        <ScrollView>
          <View>
            <View style={styles.container}>
              <View style={styles.container1}>
                <Image
                  source={require("../../../assets/img/mapscreen.jpg")}
                  style={this.state.mapImgStyle}
                  resizeMode={"cover"}
                />
              </View>
              <View
                style={[
                  styles.container2,
                  { display: this.state.container2Display }
                ]}
              >
                {/* <TextWithIconListPanel horizontal={false} rowType={14} numColumns={1} dataSource={dataSource} itemwrapper={styles.itemwrapper}
              itemClickHandler={() => {
                alert('item pressed menu');
              }}
            
              /> */}
                <TextList
                  horizontal={false}
                  rowType={14}
                  numColumns={1}
                  dataSource={this.state.dataSource}
                  itemwrapper={styles.itemwrapper}
                  itemClickHandler={() => {
                    alert("item pressed menu");
                  }}
                />
              </View>
              
            </View>
          </View>
        </ScrollView>
        <View style={{height:'70%',position:'absolute',bottom:0,display:this.state.container3Display}}>
                <RatingPresentational display={this.state.container3Display} />
              </View>
      </View>
    );
  }
  componentDidMount() {
    this.props.addStartIndexToData(111); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(111);
    this.props.addStartIndexToStackData(startIndexArr);
  }
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName("Mapping Offers state", state);
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
)(TrackingOrder);
