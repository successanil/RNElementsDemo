// Import libraries for making a component
import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PrintUtils from '../../../../utils/PrintUtils';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import styles from "./Header.style";

const cc = require('../../../../utils/ColorsContants');
// const Dimens = require('../../../../utils/Dimens');
const AppFonts = require('../../../../utils/AppFonts');
import BackButton from '../../../../assets/img/backbutton.svg';
import SettingsButton from '../../../../assets/img/settings_icon.svg';
import Dimens from '../../../../utils/Dimens';
/*
Configurable header Component.
Usage: 
add values for displayHamburger,displayHomeAddress,displayBackButton,displaySmiley,displaySearchIcon 
as displayHamburger={'flex/none'}
add values for buttonHandler as buttonHandler {()=>{
  
}} 
*/

// Make a component

export class Header extends Component {
  constructor(props) {
    super(props);
    PrintUtils.printLogWithClassName('Header', props);
    this.state = {
      props: props,
    };
  }

  componentDidMount() {
    // if (this.state.props.displayHelpTextInPlaceOfSmiley === undefined) {
    //   this.setState({
    //     displayHelpTextInPlaceOfSmiley: false
    //   });
    // }
  }

  render() {
    return (
      <View>
        {Platform.OS == 'ios' && (
          <View
            //To set the background color in IOS Status Bar also
            style={{
              backgroundColor: '#FFF',
              height:
                Platform.OS === 'ios' ? hp('2.5%') : StatusBar.currentHeight,
            }}>
            <StatusBar
              barStyle="dark-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#FFF"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
          </View>
        )}
        <View
          style={[
            this.state.props.styles.viewStyle,
            {flexDirection: 'row', width: '100%'},
          ]}>
          
          <View
            style={[
              this.state.props.styles.hamburgerViewStyle,
              {display: this.state.props.displayHamburger},
            ]}>
            <TouchableOpacity
              onPress={() => {
                this.state.props.buttonHandler(0);
              }}>
              <Image
                source={require('../../../../assets/img/navigation_hamburger.png')}
                style={{width: 18, height: 18}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: Dimens.wpThree,
              paddingTop: Dimens.wpThree,
              display: this.state.props.displayBackButton,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.state.props.buttonHandler(1);
              }}>
              <BackButton
                width={Dimens.wpFive}
                height={Dimens.wpFive}
                source={require('../../../../assets/img/back_arrow.png')}
                style={{
                  width: Dimens.wpTen,
                  height: Dimens.wpTen,
                  tintColor: cc.colorActiveTab,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              this.state.props.styles.homeLayout,
              {display: this.state.props.displayHomeAddress},
            ]}>
            <TouchableOpacity
              onPress={() => {
                this.state.props.buttonHandler(2);
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={this.state.props.styles.homeText}>
                  {this.state.props.headerTitle[0]}
                </Text>
                <Image
                  source={require('../../../../assets/img/down_arrow.png')}
                  style={[
                    this.state.props.styles.downArrowStyle,
                    {display: this.state.props.displayHomeAddressDownArrow},
                  ]}
                />
              </View>
              <Text style={this.state.props.styles.addressText}>
                {this.state.props.headerTitle[1]}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              this.state.props.styles.smileViewStyle,
              {display: this.state.props.displaySmiley},
            ]}>
            <TouchableOpacity
              onPress={() => {
                this.state.props.buttonHandler(3);
              }}>
            <SettingsButton
              width={Dimens.wpFive}
              height={Dimens.wpFive}
              style={{
                width: Dimens.wpTen,
                height: Dimens.wpTen,
                display: this.state.props.displaySmiley,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={this.state.props.styles.TextInPlaceOfSmiley}>
            <Text style={this.state.props.styles.helpStyle}>
              {this.state.props.displayHelpTextInPlaceOfSmiley}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              position: 'absolute',
              right: 0,
              marginRight: Dimens.wpFive,
              display: this.state.props.displaySearchIcon,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.state.props.buttonHandler(2);
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  this.state.props.styles.searchTxtStyle,
                  {
                    display: this.state.props.displaySearchIcon,
                  },
                ]}>
                Search Plate
              </Text>
              <Image
                source={require('../../../../assets/img/search_tab.png')}
                resizeMode={'center'}
                style={[
                  this.state.props.styles.searchIconStyle,
                  {
                    display: this.state.props.displaySearchIcon,
                    width: 24,
                    height: 24,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textStyle}>
            <Text>{this.state.props.headerText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// Make the component available to other parts of the app
// export { Header };
