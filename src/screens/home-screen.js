import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles/home-screen-style';

const HomeScreen = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View style={styles.container}>
        <Video
          // source={{uri: getVideoUri}}
          source={require('../img/chatting.mp4')}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
