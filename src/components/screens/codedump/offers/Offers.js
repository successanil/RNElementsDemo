// Import libraries for making a component
import React,{Component} from "react";
import { Image, Text, View,ScrollView,TouchableOpacity } from "react-native";
import FoodList from '../../commonappui/FoodList';
import styles from './Offers.style'

import { connect } from "react-redux";
import AppUtils from "../../../../utils/AppUtils";
import PrintUtils from "../../../../utils/PrintUtils";

import { addStartIndex,addStartIndexToScreenStack } from "../../../../actions/index";


class Offers extends Component{
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
      <ScrollView>
      <View>
      <View>
      <Image source={require('../../../assets/img/offer_banner.png')} style={styles.bannerImgStyle} resizeMode={'cover'}/>
      <TouchableOpacity onPress={
        ()=>{
             AppUtils.backScreenFetch(this.props.startIndexStack,(lastScreen)=>{
               PrintUtils.showAlertForBackScreen(lastScreen);
               if(lastScreen == 3){
                 this.props.navigation.navigate('Dashboard')
               }
             })


        }
      } style={styles.touchStyleBack}>
      <Image source={require('../../../assets/img/back_arrow.png')} style={styles.bannerBackArrowStyle}/>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.getUptoText}>GET UPTO 60% OFF </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.useCodeText}>Use code: </Text><Text style={[styles.useCodeText,{color:'#2546B0'}]}>TIPTOP60</Text>
        </View>
        <Text style={styles.validText}>Valid once every two hours | Additional Rs 30 Cashback via Amazon pay (Valid 10 times per user till 12th june) </Text>
      </View>

      <View style={{marginTop:16,marginBottom:16,borderWidth:0.5,borderStyle:'dashed',borderRadius:1,borderColor:'#9398A2'}}/>

      <View
        style={{width: "100%" }}
      >
        <Text style={styles.topRestaurantText}>
          Top 157 Restaurants near you
        </Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Image
            source={require("../../../assets/img/filter.png")}
            resizeMode={'center'}
            style={{ marginRight: 16, width: 16, height: 16 }}
          />
          <Text style={[styles.filterText]}>Filter</Text>
        </View>
      </View>

       <View>
       <FoodList
               dataSource={dataSource}
               orientationHorizontal={false}
               itemType={1}
               numColumns={1}
               itemwrapper={styles.itemwrapper}
               itemClickHandler={() => {
                  this.props.navigation.navigate('RestaurantProfileDashboard')
               }}
               />
      </View>
      </View>
      </View>
      </ScrollView>
    );
  }
  componentDidMount() {
    this.props.addStartIndexToData(61); // screen number
    startIndexArr = this.props.startIndexStack;
    startIndexArr.push(61);
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
)(Offers);
