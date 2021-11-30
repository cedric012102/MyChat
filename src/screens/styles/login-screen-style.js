import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: Dimensions.get('window').height - 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  elephantImage: {
    paddingVertical: 15,
    marginTop: 2,
    alignSelf: 'center',
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 68,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Copperplate',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonAreaContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 22,
    paddingHorizontal: 35,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 50,
  },
  mediaIcons: {
    alignSelf: 'flex-end',
  },
});

export default styles;
