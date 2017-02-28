import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext,
} from '@exponent/ex-navigation';

import Router from './navigation/router';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F5FCFF',
  },
});
