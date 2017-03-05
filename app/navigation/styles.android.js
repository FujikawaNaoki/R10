import { StyleSheet } from 'react-native'
import { colors, typography } from '../config/styles'

export default StyleSheet.create({
  header: {
    height: 20
  },
  navBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItemStyle: {
    backgroundColor: colors.lightGrey,
  },

  titleText: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    color: colors.mediumGrey,
    marginLeft: 20
  },

  selectedTitleText: {
    fontFamily: typography.fontMain,
    color: colors.purple
  },
  linearGradient: {
    flex: 1,
  },
})
