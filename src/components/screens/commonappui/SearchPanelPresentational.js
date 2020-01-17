import React,{Component} from "react";
import { Image, Text, TextInput, View ,TouchableOpacity} from "react-native";
import styles from "./SearchPanel.style";

const SearchPanelPresentational = props => {
  const {searchButtonHander,cancelButtonHandler,placeholderText} = props;
  return (
    <View style={styles.container2}>
    <TextInput
       style={{paddingLeft:30,width:'70%',height:40}}
       placeholder={placeholderText}
      />
    <TouchableOpacity onPress = {
      ()=>{
        searchButtonHander();
      }
    } style={styles.touchSearchTabStyle}>
    <Image source={require('../../../assets/img/search_tab.png')} style={styles.searchTabStyle}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchCancelStyle} onPress={
      ()=> {
        cancelButtonHandler()
      }
    }>
    <Image source={require('../../../assets/img/cross.png')} style={styles.cancelButtonStyle}/>
    </TouchableOpacity>
    </View>
  );
}


export default SearchPanelPresentational;
