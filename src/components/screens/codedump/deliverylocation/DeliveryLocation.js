// Import libraries for making a component
import React, { Component } from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import FoodList from "../commonappui/FoodList";
import styles from "./DeliveryLocation.style";

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";

import {
  addStartIndex,
  addStartIndexToScreenStack
} from "../../../actions/index";
import LocationTextPanel from "./LocationTextPanel";

class DeliveryLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: "Anil",
          title: "HOME",
          profilepic: require("../../../assets/img/home_tab_dl.png")
        },
        {
          key: "Sunil",
          title: "WORK",
          profilepic: require("../../../assets/img/breifcase.png")
        },
        {
          key: "Kittu",
          title: "OTHER",
          profilepic: require("../../../assets/img/other_tab_dl.png")
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        <ScrollView>
          <View style={{paddingBottom:100}}>
            <View>
              <Image
                source={require("../../../assets/img/mapscreen.jpg")}
                style={styles.bannerImgStyle}
                resizeMode={"cover"}
              />
              <TouchableOpacity
                onPress={() => {
                  AppUtils.backScreenFetch(
                    this.props.startIndexStack,
                    lastScreen => {
                      if (lastScreen == 91) {
                        this.props.navigation.navigate("DashboardAddress");
                      } else if (lastScreen == 72) {
                        this.props.navigation.navigate("MoreSavedAddress");
                      }
                    }
                  );
                }}
                style={styles.touchStyleBack}
              >
                <Image
                  source={require("../../../assets/img/back_arrow.png")}
                  style={styles.bannerBackArrowStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.container1}>
                <Text style={styles.getUptoText}>Set Delivery Location</Text>
                <LocationTextPanel />
              </View>

              <View style={[styles.container1]}>
                <Text>SAVE AS</Text>
                <FoodList
                  dataSource={this.state.dataSource}
                  orientationHorizontal={true}
                  itemType={24} // only texts with no padding
                  numColumns={1}
                />
                <View style={{height:20}} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.applyLayout}>
          <Text style={{ color: "#FFF" }}>SAVE LOCATION</Text>
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.props.addStartIndexToData(4); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(4);
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
)(DeliveryLocation);
