import React,{Component} from "react";
import { Image, Text, TextInput, View ,TouchableOpacity} from "react-native";
import FoodList from "./FoodList";
import PrintUtils from "../../../utils/PrintUtils";


class TextList extends Component{
  constructor(props) {
    super(props);
    const {selectedTab,numColumns,rowType,horizontal,itemClickHandler,searchButtonHander,cancelButtonHandler,placeholderText,dataSource,itemwrapper} = props;
    this.state= {
      searchButtonHander:searchButtonHander,
      cancelButtonHandler:cancelButtonHandler,
      placeholderText:placeholderText,
      dataSource:dataSource,
      itemwrapper:itemwrapper,
      rowType:rowType,
      horizontal:horizontal,
      numColumns:numColumns,
      itemClickHandler:itemClickHandler,
      selectedTab:selectedTab
    };
  }

  render(){
    // PrintUtils.printLogWithClassName("Search Completed state in TextList ", this.state.dataSource);
    return (

      

      <FoodList
        dataSource={this.state.dataSource}
        orientationHorizontal={this.state.horizontal}
        numColumns={this.state.numColumns}
        itemType={this.state.rowType}   // only texts with no padding
        itemwrapper={this.state.itemwrapper}
        itemClickHandler={this.state.itemClickHandler}
        selectedTab={this.state.selectedTab}
      />
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dataSource !== state.dataSource) {
      return {
        dataSource: props.dataSource,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

}

export default TextList;
