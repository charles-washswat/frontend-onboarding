import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Navigation} from 'react-native-navigation';
import MainScreen from './src/screens/main/MainScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import MypageScreen from './src/screens/mypage/MypageScreen';
import reducers from './src/reducers';

// AppRegistry.registerComponent(appName, () => App);

/** redux devtools debugger */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

Navigation.registerComponent('MainScreen', () => (props) => (
  <Provider store={store}>
    <MainScreen {...props} />
  </Provider>
));

Navigation.registerComponent('HomeScreen', () => (props) => (
  <Provider store={store}>
    <HomeScreen {...props} />
  </Provider>
));

Navigation.registerComponent('MypageScreen', () => (props) => (
  <Provider store={store}>
    <MypageScreen {...props} />
  </Provider>
));

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'MainScreen',
            },
          },
        ],
      },
    },
  });
});

// Navigation.registerComponent(
//   `MainScreen`,
//   () => (props) => (
//     <Provider store={store}>
//       <MainScreen {...props} />
//     </Provider>
//   ),
//   () => MainScreen,
// );
