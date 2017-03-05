import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem as DrawerItem,
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

class NavagationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  renderIcon = (icon, isSelected) => {
    return (
      <Icon
        name={icon}
        size={30}
        color={isSelected ? colors.purple : colors.mediumGrey} />
    )
  }

  renderTitle = (text, iconName, isSelected) => {
    return (
      <View style={styles.navBarRow}>
        {this.renderIcon(iconName, isSelected)}
        <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
          {text}
        </Text>
      </View>
    );

  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="Main"
        initialItem='schedule'
        drawerWidth={300}
      >
        <DrawerItem
          id='schedule'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Schedule', platformIconNames.calendar, isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('schedule', { tab: 'Schedule' })}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id='maps'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Maps', platformIconNames.map, isSelected)}
        >
          <StackNavigation
            id="maps"
            navigatorUID="Maps"
            initialRoute={Router.getRoute('maps')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id='faves'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Faves', platformIconNames.heart , isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('faves', { tab: 'Faves' })}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id='about'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('About', platformIconNames.about, isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('schedule', { tab: 'Schedule' })}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
      </DrawerNavigation >
    );
  }
}

export default connect()(NavagationLayout);