// Import libraries for making a component
import React from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';
import styles from './Header.style';


// Make a component
const Header = (props) => {

 const {displayHamburger,displayHomeAddress,displayBackButton,buttonHandler,displaySmiley} = props;

  return (
    <View style={{flexDirection:'row'}}>
      <View style={{paddingLeft:16,paddingTop:16,display:displayHamburger}}>
      <TouchableOpacity onPress={
        ()=>{
          buttonHandler(0);
        }
      }>
      <Image source={require('../../../assets/img/navigation_hamburger.png')} style={{width:18,height:18}} />
      </TouchableOpacity>
      </View>
      <View style={{paddingLeft:16,paddingTop:16,display:displayBackButton}}>
      <TouchableOpacity onPress={
        ()=>{
          buttonHandler(1);
        }
      }>
      <Image source={require('../../../assets/img/back_arrow.png')} style={{width:18,height:18}} />
      </TouchableOpacity>
      </View>
      <View style={[styles.homeLayout,{display:displayHomeAddress}]}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.homeText}>HOME</Text>
        <Image source={require('../../../assets/img/down_arrow.png')} style={{marginLeft:16,width:16,height:16}} />
        </View>
        <Text style={styles.addressText}>31 A , RK Flats, near Vas ...</Text>
      </View>
      <View style={{alignItem:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:16,paddingTop:16,display:displaySmiley}}>
      <Text style={{fontSize:14,marginRight:5}}>Smile</Text>
      <Image source={require('../../../assets/img/smile.png')} style={{width:18,height:18}} />
      </View>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};



// Make the component available to other parts of the app
export { Header };
