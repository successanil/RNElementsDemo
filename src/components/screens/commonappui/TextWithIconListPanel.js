import React, { Component } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./TextListPanel.style";
import FoodList from "./FoodList";
import TextList from "./TextList";


class TextWithIconListPanel extends Component {
  constructor(props) {
    super(props);
    const { searchButtonHander, cancelButtonHandler, placeholderText, dataSource } = props;
    this.state = {
      searchButtonHander: searchButtonHander,
      cancelButtonHandler: cancelButtonHandler,
      placeholderText: placeholderText,
      dataSource: dataSource
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.container4}>

          <TextList horizontal={false} selectedTab={this.state.selectedTabIndexForHeadingTextList} rowType={14} numColumns={1} dataSource={this.state.dataSource} itemwrapper={styles.itemwrapper}
            itemClickHandler={() => {
              alert('item pressed menu');
            }}
          />

        </View>

      </View>
    );
  }

}

export default TextWithIconListPanel;
