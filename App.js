import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreenVegans from './src/screens/chat-screen-vegans';
import ChatScreen90s from './src/screens/chat-screen-90s';
import HomeBottomTabNavigator from './src/navigation/home-bottom-tab-navigator';
import LoginScreen from './src/screens/login-screen';
import MessageScreen from './src/screens/message-screen';
import CreateChatRoomScreen from './src/screens/create-chat-room-screen';
import ChatRoomScreen from './src/screens/chat-room-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OnboardingScreen from './src/screens/onboarding-screen';
import Auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  const user = Auth().currentUser;
  const isLoggedIn = user !== null;
  SplashScreen.hide();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isLoggedIn ? 'Home' : 'Onboarding'}
            screenOptions={{
              title: 'My Chat',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'rgb(221, 244, 244)',
              },
            }}>
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{header: () => null}}
            />
            <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Messages"
              component={MessageScreen}
              options={({route}) => ({
                title: route.params.thread.name,
              })}
            />
            <Stack.Screen
              name="CreateChatRoom"
              component={CreateChatRoomScreen}
              options={{title: 'Create a room'}}
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoomScreen}
              options={({navigation}) => ({
                title: 'Chat Room',
                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => navigation.navigate('CreateChatRoom')}>
                    <AntDesign name="pluscircle" size={30} color="#444" />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity style={{marginRight: 10}} onPress={{}}>
                    <AntDesign name="logout" size={30} color="#444" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name={'ChatScreen90s'}
              component={ChatScreen90s}
              options={({route}) => ({title: route.params.id})}
            />
            <Stack.Screen
              name={'ChatScreenVegans'}
              component={ChatScreenVegans}
              options={({route}) => ({title: route.params.id})}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
