import React, {useState, useEffect} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {VeganInputBox} from '../components/vegan-input-box';
import Firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {ChatMessage} from '../components/chat-message';
import styles from './styles/chat-screen-style';

const ChatScreenVegans = ({navigation}) => {
  const backgroundimage = require('../img/veganbackground.webp');
  const [chats, setChats] = useState([]);
  const route = useRoute();

  console.log(route.params);

  useEffect(onSyncChats, []);

  useEffect(() => {
    navigation.setOptions({
      title: 'Vegans Rock',
    });
  }, []);

  return (
    <ImageBackground
      source={backgroundimage}
      style={{width: '100%', height: '100%'}}>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatMessage item={item} />}
        inverted
        keyExtractor={(_, index) => index}
        style={styles.flatlistContainer}
      />

      <VeganInputBox />
    </ImageBackground>
  );

  function onSyncChats() {
    const unsubscribe = Firestore()
      .collection('VeganChats')
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

export default ChatScreenVegans;
