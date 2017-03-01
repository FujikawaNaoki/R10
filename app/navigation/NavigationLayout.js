import React from 'react';
import { Text } from 'react-native';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors } from '../config/styles';

// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
export default class Layout extends React.Component {
  renderIcon(icon, isSelected) {
    return (
      <Icon
        name={icon}
        size={30}
        color={isSelected ? colors.white : colors.mediumGrey} />
    )
  }

  renderTitle(text, isSelected) {
    return (
      <Text style={[styles.titleText, isSelected ? { color: colors.white } : { color: colors.mediumGrey }]}>
        {text}
      </Text>
    )
  }

  render() {

    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule"
        tabBarColor="#000"
      >
        <TabItem
          id="schedule"
          title="Schedule"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}
          renderTitle={isSelected => this.renderTitle("Schedule", isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={isSelected => this.renderTitle("About", isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}