import React from 'react';
import {View, Text, Image} from 'react-native';
import Auth from '@react-native-firebase/auth';
import styles from './styles/chat-list-item-style';

export function ChatListItem() {
  const photoURL = Auth().currentUser.photoURL;
  const displayName = Auth().currentUser.displayName;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri: photoURL}} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{displayName}</Text>
          <Text numberOfLines={1} style={styles.lastMessage}>
            Well done! I am Legend
          </Text>
        </View>
      </View>

      <Text style={styles.time}>2021-10-01 4:45PM</Text>
    </View>
  );
}
