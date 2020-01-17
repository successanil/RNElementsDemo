import { Platform, StyleSheet } from "react-native";

styles = "";

const stylesAndroid = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  itemtitle: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    height: 30,
    fontStyle: "italic"
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  }
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    // borderRadius: 10,
    width:'100%',
    marginTop: 16
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  itemtitle: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    height: 30,
    fontStyle: "italic"
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  }
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
