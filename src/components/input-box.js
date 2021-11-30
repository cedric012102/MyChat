import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import styles from './styles/input-box-style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input} from 'react-native-elements';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function InputBox() {
  const userDisplayName = Auth().currentUser.displayName;
  const userPhotoURL = Auth().currentUser.photoURL;

  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.warn('Microphone');
  };

  const onSendPress = () => {
    console.warn(`Sending: ${message}`);

    //send the message to the backend

    setMessage(''); //resets it to empty string
  };

  async function onPress() {
    try {
      await firestore()
        .collection('chats')
        .add({
          postTime: firestore.Timestamp.fromDate(new Date()),
          message,
          photoUrl: userPhotoURL,
          displayName: userDisplayName,
          userId: Auth().currentUser.uid,
        });
    } catch (e) {
      console.log(e);
    }

    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Input
            style={styles.TextInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Message..."
            leftIcon={<FontAwesome5 name="laugh-beam" size={24} color="grey" />}
            rightIcon={
              !message && <FontAwesome name="camera" size={24} color="grey" />
            }
            value={message}
            onChangeText={setMessage}
          />
        </View>

        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonContainer}>
            {!message ? (
              <FontAwesome name="microphone" size={28} color="lightblue" />
            ) : (
              <FontAwesome name="send" size={28} color="lightblue" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
