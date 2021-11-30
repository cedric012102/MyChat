import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/chat-room-item-style';
import {useNavigation} from '@react-navigation/native';
import Auth from '@react-native-firebase/auth';

export function ChatRoomItem({label, source, routeName}) {
  const navigation = useNavigation();
  const userDisplayName = Auth().currentUser.displayName;
  const onClick = () => {
    console.warn(`Clicked on ${routeName}`);
    navigation.navigate(routeName, {id: routeName, name: userDisplayName});
  };
  return (
    <View>
      <View style={styles.chatSelectionContainer}>
        <Image source={source} style={styles.chatImage} />
        <Text style={styles.chatSelectionText}>{label}</Text>
        <TouchableOpacity onPress={onClick}>
          <View style={styles.chatSelectionBar}>
            <Text style={styles.chatSelectionBarText}>Join Room</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
