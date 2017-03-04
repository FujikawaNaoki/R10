import { StyleSheet } from 'react-native'
import { colors, typography } from '../../config/styles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    backgroundColor: colors.white,
    padding: 15
  },
  headerText: {
    fontSize: 18,
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: typography.fontMain,
    backgroundColor: colors.lightGrey
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: typography.fontMain,
    color: colors.black
  },
  location: {
    fontSize: 18,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
})
