import React, { useState } from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles/chat-message-style';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';


export function ChatMessage({item, route}) {
  const navigation = useNavigation();
  const isMyMessage = () => {
    return item.message && item.userId;
  }

  function editPressed() {
    const chat = ({
      id: route, chat: route.params.item.message.id
      
    })
    updateMessage(chat, updateComplete)
  }
  function updateComplete(){
    navigation.navigate("ChatScreen90s")
  }

  return (
    <ScrollView contentContainerStyle={{flex: null}} bounces={false}>
    <View style ={styles.container}>
      <View style={[
        styles.messageBox, {
        backgroundColor: isMyMessage() ? '#DCF8C5' : '#FFF',
        marginLeft: isMyMessage() ? 50 : 0,
        marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
    <Image source={{uri: item.photoUrl}} style={styles.avatar}/>
    {!isMyMessage() && <Text style={styles.name}>{item.displayName}</Text>}
    <Text style={styles.message}>{item.message}</Text>
    <Text style={styles.time}>{moment(item.postTime.toDate()).fromNow()}</Text>
    <View style={styles.chatContainerIcons}>
    {isMyMessage() ? <TouchableOpacity>
    <FontAwesome5 name="trash" size={20} color="grey" />
    </TouchableOpacity> : null}
    {isMyMessage() ? <TouchableOpacity onPress={() => editPressed()}>
    <FontAwesome5 name="edit" size={20} color="grey" />
    </TouchableOpacity> : null}
    </View>
    </View>
    </View>
    </ScrollView>
  );

  async function updateMessage(message, updateComplete){
    firebase.
    firestore().
    collection('chats').
    doc(message.id)
    .set(message).then(() => updateComplete(message))
    .catch((error) => console.log(error))
  }
}