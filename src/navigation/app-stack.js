import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatRoomScreen from '../screens/chat-room-screen';
import ProfileScreen from '../screens/profile-screen';
import CreateChatRoom from '../screens/create-chat-room-screen';
import ChatScreen90s from '../screens/chat-screen-90s';
import ChatScreenVegans from '../screens/chat-screen-vegans';
import ChatListScreen from '../screens/chat-list-screen';
import MessagesScreen from '../screens/message-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Feedstack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyChat"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('CreateChatRoom')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="CreateChatRoom"
      component={CreateChatRoom}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Rooms" component={ChatRoomScreen} />
    <Stack.Screen
      name={'ChatScreen90s'}
      component={ChatScreen90s}
      options={({route}) => ({
        title: route.params.id,
        headerBackTitleVisible: false,
      })}
    />
    <Stack.Screen
      name={'ChatScreenVegans'}
      component={ChatScreenVegans}
      options={({route}) => ({
        title: route.params.id,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="CreateChatRoom"
      component={CreateChatRoom}
      options={{
        headerTitle: 'Create Room',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisible = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat' || routeName === 'CreateChatRoom') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabStyle: {
          backgroundColor: '#34b1eb',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Feedstack}
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
        name="Message"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubbles" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-circle'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
