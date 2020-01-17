import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Image,
  BackHandler,
  Alert,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Card, Switch} from 'react-native-paper';

import CancelIcon from '../../../../assets/img/cancelicon.svg';

const cc = require('../../../../utils/ColorsContants');
import PrintUtils from '../../../../utils/PrintUtils';

import ShareIcon from '../../../../../src/assets/img/share_icon.svg';
import AttendingIcon from '../../../../../src/assets/img/attending_icon.svg';
import AttendingUsers from '../../../../../src/assets/img/noun_group.svg';
import styles from './AppDialog.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimens from '../../../../utils/Dimens';

export default class AppDialog {}

const addGenericModal = (
  i,
  modalVisible,
  jsonData,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      {addDesiredViewForModal(
        i,
        modalVisible,
        jsonData,
        modalMessage,
        showLoadingIcon,
        callback,
      )}
    </Modal>
  );
};

const addDesiredViewForModal = (
  i,
  modalVisible,
  jsonData,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  if (i == 1) {
    return addViewForOne(
      i,
      modalVisible,
      modalTitle,
      modalMessage,
      showLoadingIcon,
      callback,
    );
  } else if (i == 3 || i == 2) {
    return addViewForThree(
      i,
      modalVisible,
      modalTitle,
      modalMessage,
      showLoadingIcon,
      callback,
    );
  } else if (i == 4) {
    return addViewForFour(
      i,
      modalVisible,
      modalTitle,
      modalMessage,
      showLoadingIcon,
      callback,
    );
  } else if (i == 5) {
    return addViewForNotificationSettings(
      i,
      modalVisible,
      jsonData,
      modalMessage,
      showLoadingIcon,
      callback,
    );
  }
};

var addViewForOne = (
  i,
  modalVisible,
  modalTitle,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  return (
    <View>
      <View style={{height: '30%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}} />
      <View style={{height: '40%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
          }}>
          <View
            style={{
              height: 40,
              backgroundColor: '#FFF',
              elevation: 2,
              paddingLeft: 10,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>{modalTitle}</Text>
            <View
              style={{
                marginLeft: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: showLoadingIcon,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="#60DBFF" />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                width: 100,
                height: 30,
                borderWidth: 0.6,
                position: 'absolute',
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                callback(!modalVisible);
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: hp('5%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              editable={true}
              maxLength={30}
              placeholder={'Enter registered email'}
              onChangeText={text => (this.forgetEmail = text)}
              // style={DynamicStyle.signUpscreenTextInput}
            />
          </View>
          <View
            style={{
              marginTop: hp('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                width: 100,
                height: 30,
                borderWidth: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                callback('Invoke forgetEmailFunction');
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{height: '30%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}} />
    </View>
  );
};

var addViewForFour = (
  i,
  modalVisible,
  modalTitle,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  return (
    <View>
      <View style={{height: '20%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            // borderWidth: 0.6,
            position: 'absolute',
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            callback(!modalVisible);
          }}></TouchableOpacity>
      </View>
      <View style={{height: '70%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: '100%',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <View
            style={{
              height: 40,
              backgroundColor: '#FFF',
              // elevation: 2,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginLeft: wp('5%'),
                color: '#000000',
                fontSize: hp('2.5%'),
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Event's Name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('3%'),
                marginTop: hp('1%'),
                alignItems: 'center',
              }}>
              <AttendingUsers width="10%" height="10" />
              <Text
                style={{
                  color: '#000',
                  fontSize: hp('1.8%'),
                  fontFamily: 'Montserrat-Italic',
                  color: cc.colorActiveTab,
                }}>
                22 people attending
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: showLoadingIcon,
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                width: 100,
                height: 30,
                // borderWidth: 0.6,
                position: 'absolute',
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                callback(!modalVisible);
              }}>
              {/* <Text>Cancel</Text> */}
              <ShareIcon
                height="18"
                width="18"
                style={{position: 'absolute', right: wp('3%'), top: wp('2%')}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: hp('5%'),
              flexDirection: 'row',
              height: hp('40%'),
            }}>
            <AttendingIcon
              width="30%"
              height="20"
              style={{position: 'absolute', right: 0}}
            />
            <View
              style={{position: 'absolute', left: 0, paddingLeft: wp('5%')}}>
              <Text>15 Jan 2019 | 10.05</Text>
              <Text>Aga Khan Palace, Shivaji Nagar</Text>
            </View>

            <View
              style={{paddingLeft: wp('5%'), position: 'absolute', bottom: 0}}>
              <Text style={{width: wp('100%'), fontSize: hp('1%')}}>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs. The quick,
                brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
                quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
                nymphs grab quick-jived waltz. Brick quiz whangs The quick,
                brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
                quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
                nymphs grab quick-jived waltz.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: '10%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            // borderWidth: 0.6,
            position: 'absolute',
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            callback(!modalVisible);
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

var addViewForThree = (
  i,
  modalVisible,
  modalTitle,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  return (
    <View>
      <View style={{height: '30%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}} />
      <View style={{height: '40%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
          }}>
          <View
            style={{
              height: 40,
              backgroundColor: '#FFF',
              elevation: 2,
              paddingLeft: 10,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>{modalTitle}</Text>
            <View
              style={{
                marginLeft: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator
                size="large"
                color="#60DBFF"
                style={{display: showLoadingIcon}}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                width: 100,
                height: 30,
                borderWidth: 0.6,
                position: 'absolute',
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                callback(!modalVisible);
              }}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: hp('5%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{modalMessage}</Text>
          </View>
          <View
            style={{
              marginTop: hp('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}></View>
        </View>
      </View>
      <View style={{height: '30%', backgroundColor: 'rgba(52, 52, 52, 0.8)'}} />
    </View>
  );
};

var addViewForNotificationSettings = (
  i,
  modalVisible,
  jsonData,
  modalMessage,
  showLoadingIcon,
  callback,
) => {
  // PrintUtils.printLog(jsonData);
  var jsonObj = jsonData;
  PrintUtils.printLogWithClassName('AppDialog', jsonObj);
  var dataObj = jsonObj.data;
  return (
    <View>
      <View style={{height: '30%', backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            callback(!modalVisible);
          }}></TouchableOpacity>
      </View>
      <View
        style={{
          height: '30%',
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            callback(!modalVisible);
          }}></TouchableOpacity>
      </View>
      <Card style={{height: '40%', backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>
        <View
          style={{
            backgroundColor: '#404040',
            marginLeft: Dimens.wpSix,
            marginRight: Dimens.wpSix,
            paddingBottom: 20,
            borderRadius: 18,
            justifyContent: 'center',
          }}>
          <View
            style={{
              // height: 40,
              // elevation: 2,
              flexDirection: 'row',
              paddingLeft: wp('5%'),
            }}>
            <Text
              style={[
                styles.textNotificationTitle,
                {width: '50%', paddingTop: wp('5%'), paddingBottom: wp('5%')},
              ]}>
              NOTIFICATIONS
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#00000000',
                // width: 100,
                // height: 30,
                // borderWidth: 0.6,
                // position: 'absolute',
                width: '50%',
                // right: 10,
                paddingRight: wp('3%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
              onPress={() => {
                callback(!modalVisible);
              }}>
              {/* <CancelIcon height='50' width="50"/> */}
              <Icon name="close" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginLeft: wp('5%'),
              marginRight: wp('3%'),
              borderBottomColor: '#F0F0F0',
              borderBottomWidth: 1,
            }}></View>
          <View
            style={{
              padding: wp('5%'),
            }}>
            <View
              style={[styles.notificationTextSwitchContainer, {marginTop: 0}]}>
              <Text style={styles.textStyleForNotificationText}>ALL</Text>
              <Switch
                value={dataObj.all}
                style={{position: 'absolute', right: 0}}
              />
            </View>
            <View style={styles.notificationTextSwitchContainer}>
              <Text style={styles.textStyleForNotificationText}>Events</Text>
              <Switch
                value
                value={dataObj.events}
                style={{position: 'absolute', right: 0}}
              />
            </View>
            <View style={styles.notificationTextSwitchContainer}>
              <Text style={styles.textStyleForNotificationText}>Offers</Text>
              <Switch
                value={dataObj.offers}
                style={{position: 'absolute', right: 0}}
              />
            </View>
            <View style={styles.notificationTextSwitchContainer}>
              <Text style={styles.textStyleForNotificationText}>Toast</Text>
              <Switch
                value={dataObj.toast}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

module.exports = {
  addGenericModal,
};
