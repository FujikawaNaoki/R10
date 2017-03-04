import { dimensions, colors, typography } from '../../config/styles'

export default {
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth * 0.75,
    height: 50,
    borderRadius: 25,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: typography.fontMain,
    backgroundColor: 'transparent',
  }
}