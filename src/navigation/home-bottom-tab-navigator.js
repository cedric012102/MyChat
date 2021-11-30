import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/profile-screen';
import ChatListScreen from '../screens/chat-list-screen';
import ChatRoomScreen from '../screens/chat-room-screen';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#34b1eb',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'home-circle'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name={'chat'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={ChatRoomScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'md-chatbubbles'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-circle'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
