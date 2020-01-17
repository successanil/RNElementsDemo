import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import styles from "./BottomNavigationTabs.style";

export default class BottomNavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    const { bottomTabsArray,onTabPressed } = this.props;
    this.state = {
      tabColorArr: [
        {
          color: styles.tabInactiveColor
        },
        {
          color: styles.tabInactiveColor
        },
        {
          color: styles.tabInactiveColor
        },
        {
          color: styles.tabInactiveColor
        },
        {
          color: styles.tabInactiveColor
        }
      ],
      onTabPressed:onTabPressed
    };
  }

  render() {
    return (
      <View style={styles.tabBar}>
        {this.renderIndividualTab(
          0,
          require("../../../assets/img/home_tab.png"),
          "Home"
        )}
        {this.renderIndividualTab(
          1,
          require("../../../assets/img/offers_tab.png"),
          "Offers"
        )}
        {this.renderIndividualTab(
          2,
          require("../../../assets/img/search_tab.png"),
          "Search"
        )}
        {this.renderIndividualTab(
          3,
          require("../../../assets/img/cart_icon.png"),
          "Cart"
        )}
        {this.renderIndividualTab(
          4,
          require("../../../assets/img/more_tab.png"),
          "More"
        )}
      </View>
    );
  }

  renderIndividualTab(index, imagePath, tabLabel) {
    return (
      <TouchableOpacity onPress={this.onTabPressedLocal.bind(this, index)}>
        <View style={styles.tab}>
          <Image
            source={imagePath}
            resizeMode={'center'}
            style={{
              width: styles.tabImageDimen,
              height: styles.tabImageDimen,
              marginBottom: 2,
              // tintColor: this.state.tabColorArr[index].color
            }}
          />
          <Text
            style={[styles.tabLabelStyle,{color: this.state.tabColorArr[index].color}]}
          >
            {tabLabel}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  onTabPressedLocal(index) {
       this.state.onTabPressed(index);
  }
}
