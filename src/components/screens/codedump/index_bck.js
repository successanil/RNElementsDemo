/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/store/index';
import React from 'react';
import BackButton from './src/assets/img/backbutton.svg';
import {Header, Button, ThemeProvider, Avatar} from 'react-native-elements';
import {View, Text, Image} from 'react-native';
const cc = require('./src/utils/ColorsContants');
const store = configureStore();

const theme = {
  Button: {
    raised: true,
  },
  Avatar: {
    size: 'large',
  },
};

const RNRedux = () => (
  <Provider store={store}>
    {/* <PaperProvider theme={theme}> */}
    {/* <App /> */}
    {/* <AnimatedCollapsible /> */}
    {/* <AnimatedCollapsible2 /> */}
    {/* <PaperUILibDemo /> */}

    {/* <PaperUILibDemo2 /> */}
    {/* </PaperProvider> */}
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
        }}>
        {/* <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'rightcircleo', color: '#fff' }}
/>
        <View style={{flex:1,justifyContent:'center'}}>
        <Button title="Hey!" />
        </View>
        <View style={{flexDirection:'row',flex:1,alignItems:"flex-end"}}>
          <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            containerStyle={{flex: 3,padding:10}}
          />

          <Avatar rounded title="MD" containerStyle={{flex: 3,padding:10}} />

          <Avatar rounded icon={{name: 'home'}} containerStyle={{flex: 3,padding:10}} />

          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            containerStyle={{flex: 3,padding:10}}
          />
        </View> */}
        <View style={{flex: 1}}>
          <Image
            style={{width: '100%', position: 'absolute'}}
            source={require('./src/assets/img/Header2.png')}
            resizeMode={'contain'}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  height: '30%',
                  width: '100%',
                }}>
                <View style={{flex: 1, paddingLeft: 15, paddingRight: 30}}>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                      backgroundColor: '#EAE54D',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderRadius: 30,
                      width: '100%',
                      height: '100%',
                    }}>
                    <Image
                      width={'30%'}
                      height={'30%'}
                      source={require('./src/assets/img/back_arrow.png')}
                      style={{margin: 5}}
                    />
                  </View>
                </View>
                <View style={{flex: 3}}></View>
                <View style={{flex: 1}}></View>
              </View>
              <Text style={{fontSize: 20, color: '#212B68'}}>Choose your</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  textDecorationStyle: 'dotted',
                  textAlign: 'center',
                  fontSize: 30,
                  color: '#212B68',
                }}>
                Course
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 3}}></View>
      </View>
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
