import React,{Component} from "react";
import { Image, Text, TextInput, View ,TouchableOpacity} from "react-native";
import SearchPanelPresentational from './SearchPanelPresentational';
import styles from "./SearchPanel.style";


class SearchPanel extends Component{
  constructor(props) {
    super(props);
    const {searchButtonHander,cancelButtonHandler,placeholderText} = props;
    this.state= {
      searchButtonHander:searchButtonHander,
      cancelButtonHandler:cancelButtonHandler,
      placeholderText:placeholderText
    };
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.container1}>
      <SearchPanelPresentational searchButtonHander={this.state.searchButtonHander} placeholderText={this.state.placeholderText} cancelButtonHandler={this.state.cancelButtonHandler} />
      </View>

      <View style={{height:'80%',backgroundColor:'rgba(52, 52, 52, 0)'}}>
      </View>

      </View>
    );
  }

}

export default SearchPanel;
