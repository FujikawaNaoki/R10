import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors, typography, platformIconNames } from '../config/styles'

import LinearGradient from 'react-native-linear-gradient';

import Router from './router'

const defaultRouteConfig = {
  navigationBar: {
    titleStyle: {
      color: colors.white,
      fontSize: 20,
      fontFamily: typography.fontMain,
      fontWeight: 'bold'
    },
    tintColor: colors.white,
    renderBackground: () => (
      <LinearGradient
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 0.0 }}
        colors={[colors.red, colors.purple]}
        style={styles.linearGradient} />
    ),
  }
}

class NavagationLayout extends Component {
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
        navigatorUID="Main"
        initialTab="schedule"
        tabBarColor="#000"
      >
        <TabItem
          id="schedule"
          title="Schedule"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => this.renderIcon(platformIconNames.calendar, isSelected)}
          renderTitle={isSelected => this.renderTitle("Schedule", isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('schedule', { tab: 'Schedule' })}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => this.renderIcon(platformIconNames.heart, isSelected)}
          renderTitle={isSelected => this.renderTitle("Faves", isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('faves', { tab: 'Faves' })}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="maps"
          title="Maps"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => this.renderIcon(platformIconNames.map, isSelected)}
          renderTitle={isSelected => this.renderTitle("Maps", isSelected)}
        >
          <StackNavigation
            id="maps"
            navigatorUID="Maps"
            initialRoute={Router.getRoute('maps')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => this.renderIcon(platformIconNames.about, isSelected)}
          renderTitle={isSelected => this.renderTitle("About", isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="About"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation >
    );
  }
}

export default connect()(NavagationLayout);