/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry, Dimensions} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/store/index';
import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {View} from 'react-native';
import RNApp from './src/components/screens/rnelements/RNApp';
const cc = require('./src/utils/ColorsContants');
const store = configureStore();

const theme = {
  Button: {
    raised: true,
  },
  Avatar: {
    size: 'large',
  }
};

const RNRedux = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
     <RNApp />
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
