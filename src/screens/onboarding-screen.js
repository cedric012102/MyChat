import React, {useEffect} from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;

const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  useEffect(onSaveHasOnboarded, []);

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#2191FB',
          image: (
            <Image
              source={require('../img/ManOnPhone.png')}
              style={{
                width: 200,
                height: 200,
                marginBottom: 200,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Connect With The Universe',
          subtitle:
            'Join Chat Rooms With Others That May Have Similar Interests!',
        },
        {
          backgroundColor: '#56E39F',
          image: (
            <Image
              source={require('../img/GirlOnPhone.png')}
              style={{
                width: 200,
                height: 200,
                marginBottom: 200,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Create Your Own Chat Room',
          subtitle: 'Make Your Own Chat Room That Others Can Join!',
        },
        {
          backgroundColor: '#58A4B0',
          image: (
            <Image
              source={require('../img/BothOnPhones.png')}
              style={{
                width: 200,
                height: 200,
                marginBottom: 200,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Be An Innovator! Be You!',
          subtitle: 'Meet Others That Like What You Like But Keep It Friendly.',
        },
      ]}
    />
  );

  function onSaveHasOnboarded() {
    AsyncStorage.setItem('@has-onboarded', 'true');
  }
};

export default OnboardingScreen;
