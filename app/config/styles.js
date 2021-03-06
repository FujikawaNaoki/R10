import { Dimensions, Platform } from 'react-native'

export const colors = {
  black: '#000',
  white: '#fff',
  mediumGrey: '#999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
}

export const typography = {
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    },
    fontMainLight: 'Montserrat-Light'
  })
}

export const dimensions = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height
}

export const platformIconNames = {
  ...Platform.select({
    ios: {
      heart: 'ios-heart',
      calendar: 'ios-calendar',
      map: 'ios-map',
      about: 'ios-information-circle',
    },
    android: {
      heart: 'md-heart',
      calendar: 'md-calendar',
      map: 'md-map',
      about: 'md-information-circle'
    }
  })
}