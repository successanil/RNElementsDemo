import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
 
export default class PaperUILibDemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </View>
          <Text style={styles.paragraph}>
            This is a simple example of Card using "react-native-paper" library
          </Text>
        </Card>
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