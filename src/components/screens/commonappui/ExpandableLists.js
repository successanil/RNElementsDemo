import { ScrollView, View, Text } from 'react-native';
import React, { Component } from "react";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import ExpandableListsRowOne from './ExpandableListsRowOne';
import ExpandableListsRowChildOne from './ExpandableListsRowChildOne';


export default class ExpandableLists extends Component {

  constructor(props) {
    super(props);
    const { itemNotCollapsed,dataSource, headerView, childView } = this.props;
    this.state = {
      dataSource: dataSource,
      headerView: headerView,
      childView: childView,
      itemNotCollapsed:itemNotCollapsed
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#FFF', height: '100%' }}>
        <ScrollView>
          <View style={{ backgroundColor: '#FFF', height: '100%' }}>
            {
              this.displayContent()
            }
          </View>
        </ScrollView>
      </View>
    );
  }
  displayContent() {
    var arrRet = [];
    var i = 0;
    this.state.dataSource.forEach((child) => {
      arrRet.push(
        <Collapse isCollapsed={this.state.itemNotCollapsed}>
          <CollapseHeader>
            {this.getHeaderView(i)}
          </CollapseHeader>
          <CollapseBody>
            {this.getChildView(i)}
          </CollapseBody>
        </Collapse>
      );
      i++;
    });
    return arrRet;
  }

  getHeaderView(i) {
    if (this.state.headerView == 1) {
      return (
        <ExpandableListsRowOne Title={this.state.dataSource[i].header} Count={this.state.dataSource[i].itemCount}
        />
      );
    } else {
      return (
        <ExpandableListsRowOne Title={this.state.dataSource[i].header} Count={this.state.dataSource[i].itemCount} />
      );
    }

  }

  getChildView(i) {
    if (this.state.childView == 1) {
      return (
        <ExpandableListsRowChildOne childArr={this.state.dataSource[i].childArr} />
      );
    } else {
      return (
        <ExpandableListsRowChildOne childArr={this.state.dataSource[i].childArr} />
      );
    }

  }

}