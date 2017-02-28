import React from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
export default class Layout extends React.Component {
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule">
        <TabItem
          id="schedule"
          title="Schedule"
          selectedStyle={styles.selectedTab}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          selectedStyle={styles.selectedTab}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}