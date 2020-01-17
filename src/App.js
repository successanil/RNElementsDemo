
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import NotificationsPage from './components/screens/fdonotifcationsmod/NotificationsPage';
import {Splash} from './components/screens/fdosplashmod/Splash';

console.disableYellowBox = true;



const StackNav = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: () => ({
      header: null,
    }),
  },
  NotificationsPage: {
    screen: NotificationsPage,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const App = createAppContainer(StackNav);

export default App;
