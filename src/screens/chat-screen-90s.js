import React, {useState, useEffect} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {InputBox} from '../components/input-box';
import Firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {ChatMessage} from '../components/chat-message';
import styles from './styles/chat-screen-style';

const ChatScreen90s = ({navigation}) => {
  const backgroundimage = require('../img/90sbackground.webp');
  const [chats, setChats] = useState([]);
  const route = useRoute();

  console.log(route.params);

  useEffect(onSyncChats, []);

  useEffect(() => {
    navigation.setOptions({
      title: '90s Era',
    });
  }, []);

  return (
    <ImageBackground source={backgroundimage} style={{width: '100%', height: '100%'}}>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatMessage item={item} />}
        inverted
        keyExtractor={(_, index) => index}
        style={styles.flatlistContainer}
      />

      <InputBox />
      </ImageBackground>
  );

  function onSyncChats() {
      const unsubscribe = Firestore()
        .collection('chats')
        .orderBy('postTime', 'desc')
        .onSnapshot({
          next: collection => {
            const collectionDocuments = collection.docs.map(item => item.data());
            setChats(collectionDocuments);
          },
        });
      return unsubscribe;
    }
    
};

export default ChatScreen90s;

