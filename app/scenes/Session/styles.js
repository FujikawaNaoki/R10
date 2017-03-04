import { StyleSheet } from 'react-native'
import { colors, typography, dimensions } from '../../config/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 30
  },
  faveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    fontSize: 25,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    marginBottom: 15
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: typography.fontMain,
    color: colors.black
  },
  startTime: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    color: colors.red,
    marginBottom: 15
  },
  description: {
    fontSize: 20,
    fontFamily: typography.fontMainLight,
    marginBottom: 25
  },
  presentedBy: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    marginBottom: 15
  },
  speakerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  speakerImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  speakerName: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    marginLeft: 20
  },
})
