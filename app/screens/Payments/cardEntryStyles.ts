import { Colors } from 'react-native-paper';
import { Dimensions, StyleSheet } from 'react-native';

const cardEntryStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  CardWrapper: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 20,
    position: 'relative'
  },
  CardBackground: {
    height: '100%',
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    backfaceVisibility: 'hidden'
  },
  CardImage: {
    position: 'absolute',
    zIndex: 0,
    borderRadius: 20,
    height: '100%',
    width: '100%'
  },
  CardNumberWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: '55%',
    left: 15
  },
  CardNameWrapper: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    left: 15
  },
  CardHolderDetails: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    left: 15
  },
  CardHolderTitle: {
    fontSize: 12,
    color: Colors.grey100
  },
  CardHoldName: {
    fontSize: 20,
    color: Colors.white
  },
  VisaLogo: {
    position: 'absolute',
    top: 30,
    right: 30
  },
  VisaImage: {
    height: 50,
    width: 100,
    resizeMode: 'contain'
  },
  CardNumber: {
    fontSize: 25,
    color: 'white'
  },
  ExpirationNumberWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 40
  },
  ExpirationNumberTitle: {
    color: Colors.grey100,
    fontSize: 10
  },
  ExpirationNumber: {
    color: Colors.grey100,
    fontSize: 20
  },
  formContainer: {
    backgroundColor: Colors.grey300,
    height: (Dimensions.get('window').height * 9) / 18,
    width: (Dimensions.get('window').width * 6) / 7,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 6,

    elevation: 9
  },
  submitButton: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.orange900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: 20
  },
  inputContainer: {
    // marginVertical: 5
  },
  inputField: {
    height: 40,
    padding: 10
  },
  inputLabel: {
    color: Colors.grey600,
    fontSize: 15
  }
});

export default cardEntryStyles;
