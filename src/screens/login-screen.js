import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles/login-screen-style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Video from 'react-native-video';
import Auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View style={styles.containerStyle}>
        <Video
          // source={{uri: getVideoUri}}
          source={require('../img/swirly.mp4')}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
        <Text
          style={{
            fontFamily: 'Monoton-Regular',
            fontSize: 65,
            color: 'yellow',
            marginBottom: 100,
          }}>
          My Chat
        </Text>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('signed in with google'),
              )
            }>
            <Foundation
              name={'social-google-plus'}
              size={24}
              color="blue"
              style={styles.mediaIcons}
            />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              onFacebookButtonPress().then(() =>
                console.log('signed in with facebook'),
              )
            }>
            <AntDesign
              name={'facebook-square'}
              size={24}
              color="blue"
              style={styles.mediaIcons}
            />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  async function onGoogleButtonPress() {
    try {
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      // Create a Google credential with the token
      const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential into Firebase (Auth() is Firebase)
      await Auth().signInWithCredential(googleCredential);

      navigateToNextPage();
    } catch (e) {
      if (e.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Google Login Failure',
          'Google authentication has failed. If this persists, contact us',
          [{text: 'Close', style: 'destructive'}],
        );
        console.error(e);
      }
    }
  }

  async function onFacebookButtonPress() {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = Auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await Auth().signInWithCredential(facebookCredential);

      navigateToNextPage();
    } catch (error) {
      console.log({error});
    }
  }

  function navigateToNextPage() {
    AsyncStorage.getItem('@has-onboarded')
      .then(value => {
        if (value === 'true') {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Onboarding');
        }
      })
      .catch(e => {
        console.log({e});
        navigation.navigate('Onboarding');
      });
  }
};

export default LoginScreen;
