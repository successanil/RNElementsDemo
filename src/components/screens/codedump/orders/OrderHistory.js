// Import libraries for making a component
import React,{Component} from "react";
import { Image, Text, View,ScrollView,TouchableOpacity } from "react-native";
import FoodList from '../commonappui/FoodList';
import styles from './Orders.style';

import { connect } from "react-redux";
import AppUtils from "../../../utils/AppUtils";
import PrintUtils from "../../../utils/PrintUtils";
import { Header } from "../commonappui/header/Header";

import { addStartIndex,addStartIndexToScreenStack } from "../../../actions/index";


class OrderHistory extends Component{
  render(){
    const dataSource = [
      {
        key: "Anil",
        title: "CEO",
        profilepic:
          ""
      },
      {
        key: "Sunil",
        title: "DIRECTOR",
        profilepic:
          ""
      },
      {
        key: "Kittu",
        title: "DIRECTOR",
        profilepic:
          ""
      },
      {
        key: "Reyansh",
        title: "DIRECTOR",
        profilepic:
          ""
      }
    ];
    return (
      <View>
      <Header
            headerText=""
            displayHomeAddress={"flex"}
            displayHamburger={"none"}
            displayBackButton={"flex"}
            displaySmiley="none"
            displaySearchIcon="none"
            displayHomeAddressDownArrow={"none"}
            headerTitle={["ORDER HISTORY", ""]}
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
       <ScrollView>
      <View style={styles.container}>
      

       <View>
       <FoodList
               dataSource={dataSource}
               orientationHorizontal={false}
               itemType={12}
               numColumns={1}
               itemwrapper={styles.itemwrapper}
               itemClickHandler={() => {
                  this.props.navigation.navigate('OrderDetails')
               }}
               />
      </View>
      </View>
      </ScrollView>
      </View>

    );
  }
  componentDidMount() {
    this.props.addStartIndexToData(81); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(81);
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
)(OrderHistory);
