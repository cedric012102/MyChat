import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles/logout-button-style';
import {StackActions, useNavigation} from '@react-navigation/native';
import Auth from '@react-native-firebase/auth';

export function LogoutButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onLogout} style={styles.containerStyle}>
      <AntDesign name="logout" size={28} color={'#66C3FF'} />
    </TouchableOpacity>
  );

  function onLogout() {
    //Logout functionality here
    Auth().signOut();
    navigation.dispatch(StackActions.replace('Login'));
  }
}
