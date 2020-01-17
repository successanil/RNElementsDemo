import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card,Switch } from 'react-native-paper';
 
export default class PaperUILibDemo2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Switch value enabled />
      <Switch value enabled />
      <Switch value enabled />
      <Switch value enabled />
       </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});