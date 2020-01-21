// Import libraries for making a component
import React, {Component} from 'react';
import {View, ScrollView, BackHandler, StyleSheet} from 'react-native';

import AppDialog from '../commonappui/appdialog/AppDialog';
import ImagePicker from 'react-native-image-picker';

const cc = require('../../../utils/ColorsContants');

import {connect} from 'react-redux';
import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';
import networkUtils from '../../../utils/NetworkUtils';

import Dimens from '../../../utils/Dimens';
import AppFonts from '../../../utils/AppFonts';

import {Button, Text, Input, TouchableOpacity} from 'react-native-elements';

import {
  addStartIndex,
  addStartIndexToScreenStack,
} from '../../../actions/index';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Autocomplete from 'react-native-autocomplete-input';

import LinearGradient from 'react-native-linear-gradient';

const API = 'https://swapi.co/api';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
class RNApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySV: 'flex',
      displayLayout: 0,
      modalVisible: false,
      films: [],
      query: '',
    };
  }

  renderFilm(film) {
    const {title, director, opening_crawl, episode_id} = film;
    const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;

    return (
      <View>
        <Text style={styles.titleText}>
          {roman}. {title}
        </Text>
        <Text style={styles.directorText}>({director})</Text>
        <Text style={styles.openingText}>{opening_crawl}</Text>
      </View>
    );
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }

    const {films} = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return films.filter(film => film.title.search(regex) >= 0);
  }

  componentDidMount() {
    this.props.addStartIndexToData(301); // screen number
    var startIndexArr = this.props.startIndexStack;
    startIndexArr.push(301);
    this.props.addStartIndexToStackData(startIndexArr);

    fetch(`${API}/films/`)
      .then(res => res.json())
      .then(json => {
        const {results: films} = json;
        this.setState({films});
      });

    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  }

  fetchNotificationsOffersData() {
    var customerId = '';
    var offersData = networkUtils.fetchNotificationOffersForCustomer(
      customerId,
    );
    offersData
      .then(result => {
        this.props.addNotificationOffersHeadersForCustomerDataListToRedux(
          result.data1,
        );
        this.props.addNotificationOffersForCustomerDataListToRedux(
          result.data2,
        );
      })
      .catch(() => {});
  }

  componentWillUnmount() {}

  displayMiddleLayout() {
    if (this.state.displayLayout == 0) {
      return this.displayNormalLayout();
    }
  }

  render() {
    return <View style={{height: '100%'}}>{this.displayMiddleLayout()}</View>;
  }

  addAdTitleView() {
    const {query} = this.state;
    const films = this.findFilm(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Ad Title</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#999999',
            borderWidth: Dimens.hpPointZeroEight,
            marginBottom: Dimens.hpSeven,
          }}></View>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.autocompleteContainer}
          //   containerStyle={styles.autocompleteContainer}
          inputContainerStyle={styles.autocompleteContainer}
          data={films.length === 1 && comp(query, films[0].title) ? [] : films}
          defaultValue={query}
          onChangeText={text => this.setState({query: text})}
          placeholder="Add ad Title"
          renderItem={({title, release_date}) => (
            <TouchableOpacity onPress={() => this.setState({query: title})}>
              <Text style={styles.itemText}>
                {title} ({release_date.split('-')[0]})
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  addArticleName() {
    return (
      <View>
        <View
          style={{
            marginTop: Dimens.hpTwo,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>Article Name</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#999999',
            borderWidth: Dimens.hpPointZeroEight,
            marginBottom: Dimens.hpTwo,
          }}></View>
      </View>
    );
  }

  addUploadButton() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button
            icon={
              <Icon name="cloud-upload" size={Dimens.hpFive} color="white" />
            }
            title=""
            buttonStyle={{
              backgroundColor: '#E49B54',
              width: Dimens.hpTen,
              height: Dimens.hpTen,
              borderRadius: Dimens.hpTen / 2,
            }}
            onPress={() => {
              this.launchImageLibrary();
            }}
          />
        </View>
        <Text style={{color: '#E49B54'}}>Upload image</Text>
      </View>
    );
  }

  addRightButton() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Button
          icon={<Icon name="check" size={Dimens.hpTwo} color="white" />}
          title=""
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#53A221', '#53A221'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          buttonStyle={{
            backgroundColor: '#53A221',
            width: Dimens.hpFive,
            height: Dimens.hpFive,
            borderRadius: Dimens.hpFive / 2,
          }}
        />
      </View>
    );
  }

  addAvailablityPeriod() {
    return (
      <View
        style={{
          marginBottom: Dimens.hpTwo,
          marginTop: Dimens.hpTwo,
          flex1: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimens.hpFive,
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text>Availability Period</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon5 name="calendar-alt" size={Dimens.hpThree} color="#8AC1B2" />
          <Text style={{marginLeft: Dimens.hpOne, marginRight: Dimens.hpOne}}>
            to
          </Text>
          <Icon5 name="calendar-alt" size={Dimens.hpThree} color="#8AC1B2" />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}></View>
      </View>
    );
  }

  addAvailableQuantity() {
    return (
      <View
        style={{
          flex1: 1,
          flexDirection: 'row',
          height: Dimens.hpFour,
          marginBottom: Dimens.hpTwo,
          marginTop: Dimens.hpTwo,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text>Available Quantity</Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1,alignItems:'flex-end'}}>
          <View
            style={{flex: 1, justifyContent: 'center',alignItems:'flex-end',marginRight:10}}>
            <Icon1 name="minus" size={Dimens.hpThree} color="#969696" />
          </View>
          <View style={{flex: 0.8,justifyContent:'center',alignItems:'flex-end'}}>
            <Input
              placeholder="12"
              placeholderTextColor="#000"
              maxLength={2}
              textAlign={'center'}
              color={'#000'}
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                flex:1,
                backgroundColor: '#F1F1F1',
                borderRadius: Dimens.wpTwo,
              }}
              inputContainerStyle={{
                borderBottomWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
                color: '#F1F1F1',
                borderRadius: Dimens.wpTwo,
                placeholderStyle: {color: '#000'},
              }}
            />
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems:'flex-end'}}>
            <Icon1 name="plus" size={Dimens.hpThree} color="#969696" />
          </View>
        </View>
      </View>
    );
  }

  addInitialPriceLayout() {
    return (
      <View
        style={{
          marginBottom: Dimens.hpTwo,
          marginTop: Dimens.hpTwo,
          flex1: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimens.hpSix,
        }}>
        <View style={{flex: 1}}>
          <Text>Initial Price</Text>
          <Input
            placeholder="BA"
            containerStyle={{
              backgroundColor: '#F1F1F1',
              height: Dimens.hpThree,
              borderRadius: Dimens.wpTwo,
            }}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: '#F1F1F1',
              height: Dimens.hpThree,
              borderRadius: Dimens.wpTwo,
            }}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#E49B54'}}>Discount</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <Icon1 name="minus" size={Dimens.hpTwo} color="#969696" />
            <Input
              placeholder="30%"
              containerStyle={{
                backgroundColor: '#F1F1F1',
                flex: 1,
                height: Dimens.hpThree,
                borderRadius: Dimens.wpTwo,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 10,
              }}
              inputContainerStyle={{
                borderBottomWidth: 0,
                backgroundColor: '#F1F1F1',
                height: Dimens.hpThree,
                borderRadius: Dimens.wpTwo,
                fontSize: 10,
              }}
            />
            <Icon1 name="plus" size={Dimens.hpTwo} color="#969696" />
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text>Price after discount</Text>
          <Input
            placeholder="BA"
            containerStyle={{
              backgroundColor: '#F1F1F1',
              borderRadius: Dimens.wpTwo,
              height: Dimens.hpThree,
            }}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: '#F1F1F1',
              height: Dimens.hpThree,
              borderRadius: Dimens.wpTwo,
            }}
          />
        </View>
      </View>
    );
  }

  addDescriptionLayout() {
    return (
      <View>
        <Text style={{fontSize: Dimens.hpOnePointThree}}>Description</Text>
        <Input
          placeholder=""
          containerStyle={{
            backgroundColor: '#F1F1F1',
            borderRadius: Dimens.wpTwo,
          }}
          inputContainerStyle={{
            borderBottomWidth: 0,
            backgroundColor: '#F1F1F1',
            borderRadius: Dimens.wpTwo,
          }}
        />
      </View>
    );
  }

  displayNormalLayout() {
    return (
      <View style={{flex: 1}}>
        {this.addGenericModal()}
        <ScrollView style={{display: this.state.displaySV}}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                padding: Dimens.wpFive,
              }}>
              <View style={{marginTop: Dimens.hpFour}}></View>
              {this.addAdTitleView()}

              <View style={{marginTop: Dimens.hpSeven}}></View>

              {this.addArticleName()}
              {this.addUploadButton()}
              {this.addAvailableQuantity()}
              {this.addDescriptionLayout()}
              {this.addInitialPriceLayout()}
              {this.addAvailablityPeriod()}
              {this.addRightButton()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  addGenericModal() {
    return AppDialog.addGenericModal(
      this.state.modalInvokeVal,
      this.state.modalVisible,
      this.state.jsonData,
      this.state.modalMessage,
      this.state.showLoadingIcon,
      visible => {
        PrintUtils.printLogWithClassName(
          'Homescreen',
          'Now modal is ' + visible,
        );
        if (typeof visible == 'boolean') {
          this.setState({
            modalVisible: visible,
          });
        } else if (typeof visible == 'string') {
        }
      },
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
  },
  autocompleteContainer: {
    backgroundColor: '#F1F1F1',
    borderRadius: Dimens.wpTwo,
    paddingLeft: Dimens.wpTwo,
    height: Dimens.hpFour,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8,
  },
  infoText: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  openingText: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName('Mapping Notification state', state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addStartIndexToData: index => {
      dispatch(addStartIndex(index));
    },
    addStartIndexToStackData: dataArr => {
      dispatch(addStartIndexToScreenStack(dataArr));
    },
    addNotificationTitleDataList: dataArr => {
      dispatch(addNotificationTitleDataListToRedux(dataArr));
    },
    addNotificationToastForCustomerDataListToRedux: index => {
      dispatch(addNotificationToastForCustomerDataList(index));
    },
    addNotificationOffersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersForCustomerDataList(index));
    },
    addNotificationOffersHeadersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersHeadersForCustomerDataList(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RNApp);
