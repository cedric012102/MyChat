import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles/chat-list-screen-style';
import {ChatRoomItem} from '../components/chat-room-item';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ChatListScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flex: null}} bounces={false}>
      <View style={styles.backgroundChat}>
        <View style={styles.enterChatContainer}>
          <Text style={styles.enterChatText}>Enter a Chat Room</Text>
          <FontAwesome5
            name="hand-point-down"
            size={25}
            color="rgb(210, 210, 210)"
          />
        </View>

        <ChatRoomItem
          label="90s Era"
          source={require('../img/90s.webp')}
          routeName={'ChatScreen90s'}
        />
        <ChatRoomItem
          label="Vegans Rock"
          source={require('../img/vegans.webp')}
          routeName={'ChatScreenVegans'}
        />
        <ChatRoomItem label="In my 20s" source={require('../img/20s.webp')} />
        <ChatRoomItem
          label="30 and Grown"
          source={require('../img/30s.webp')}
        />
        <ChatRoomItem label="40s club" source={require('../img/40s.webp')} />
        <ChatRoomItem label="50 and Up" source={require('../img/50s.webp')} />
        <ChatRoomItem
          label="Lets Talk Sports"
          source={require('../img/sports.webp')}
        />
        <ChatRoomItem
          label="Entrepreneurs"
          source={require('../img/entrepreneur.webp')}
        />
        <ChatRoomItem
          label="90s and 2000s sitcoms"
          source={require('../img/sitcoms.webp')}
        />
        <ChatRoomItem
          label="Music Lovers"
          source={require('../img/music.webp')}
        />
        <ChatRoomItem label="Gamers" source={require('../img/gamers.webp')} />
        <ChatRoomItem
          label="Everything 80s"
          source={require('../img/80s.webp')}
        />
        <ChatRoomItem
          label="Marvel Versus DC"
          source={require('../img/marveldc.webp')}
        />
        <ChatRoomItem
          label="The Poets Corner"
          source={require('../img/poetry.webp')}
        />
        <ChatRoomItem
          label="Photographers"
          source={require('../img/photographers.webp')}
        />
        <ChatRoomItem
          label="Artists Express"
          source={require('../img/artists.webp')}
        />
        <ChatRoomItem
          label="Heartbreak Lounge"
          source={require('../img/heartbreak.webp')}
        />
        <ChatRoomItem label="Find Love" source={require('../img/love.webp')} />
        <ChatRoomItem
          label="Sneakerheads"
          source={require('../img/sneakerheads.webp')}
        />
      </View>
    </ScrollView>
  );
};

export default ChatListScreen;
