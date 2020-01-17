import React,{Component} from "react";
import { Image, Text, TextInput, View ,TouchableOpacity} from "react-native";
import styles from "./TextListPanel.style";
import FoodList from "./FoodList";
import TextList from "./TextList";


class TextListPanel extends Component{
  constructor(props) {
    super(props);
    const {searchButtonHander,cancelButtonHandler,placeholderText,dataSource} = props;
    this.state= {
      searchButtonHander:searchButtonHander,
      cancelButtonHandler:cancelButtonHandler,
      placeholderText:placeholderText,
      dataSource:dataSource
    };
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.container1}>

      </View>

      <View style={styles.container2}>
      <View style={styles.container2Inner} >
      <TextList horizontal={false} selectedTab={this.state.selectedTabIndexForHeadingTextList} rowType={4} numColumns={1} dataSource={this.state.dataSource} itemwrapper={styles.itemwrapper}
            itemClickHandler={() => {
              alert('item pressed menu');
            }}
          />
      </View>
      </View>
      <View style={styles.container3}>
      </View>

      </View>
    );
  }

}

export default TextListPanel;
