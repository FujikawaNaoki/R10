import { StyleSheet } from 'react-native'
import { colors, typography, dimensions } from '../../config/styles'

export default StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 30,
    borderRadius: 30,
    margin: 15,
    backgroundColor: 'white',
  },
  speakerImage: {
    borderRadius: 60,
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  speakerName: {
    fontSize: 30,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  speakerBio: {
    fontFamily: typography.fontMainLight,
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 20,
  },
  wikiButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth * 0.75,
    height: 50,
    borderRadius: 25,
    marginBottom: 25,
  },
  wikiButtonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: typography.fontMain,
    backgroundColor: 'transparent',
  }
})

