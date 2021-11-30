import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image, ActionSheetIOS, ActivityIndicator, Platform} from 'react-native';
import Auth from '@react-native-firebase/auth';
import styles from './styles/profile-screen-style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {LogoutButton} from '../components/logout-button';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const ProfileScreen = ({navigation}) => {
  const photoURL = Auth().currentUser.photoURL;
  const userDisplayName = Auth().currentUser.displayName;
  const fileName = useRef(`${Auth().currentUser.uid}-profile.png`);
  const FileReference = storage().ref(fileName.current);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={onShowActionSheet}>
        <Image style={styles.userImg} source={{uri: photoURL}} />
        {isLoading && <ActivityIndicator size="large" color='yellow' />}
        </TouchableOpacity>
        <Text style={styles.userName}>{userDisplayName}</Text>
        <View style={styles.userBtnWrapper}>
         
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
        
              <LogoutButton />
  
        </View>

        <View style={styles.userInfoWrapper}>
          
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Create a Room</Text>
            <Text style={styles.userInfoSubTitle}>Click Below</Text>
            <FontAwesome5
            name="hand-point-down"
            size={25}
            color="rgb(210, 210, 210)"
          />
          </View>
         
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CreateChatRoom')}>
            <Fontisto
            name="earth"
            size={100}
            color="black"
          />
          </TouchableOpacity>
          </View>

      </ScrollView>
    </SafeAreaView>
  );

  function onShowActionSheet() {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Take Photo'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickImage();
          } else if (buttonIndex === 2) {
            takePicture();
          }
        },
      );
    }
  }

  async function takePicture() {
    const result = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    onUploadImage(result);
  }

  async function pickImage() {
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  async function onUploadImage(result) {
    setIsLoading(true);

    const pathToFile = result.path;
    await FileReference.putFile(pathToFile);

    const url = await storage().ref(fileName.current).getDownloadURL();

    await Auth().currentUser.updateProfile({
      photoURL: url,
    });

    setIsLoading(false);
  }

};

export default ProfileScreen;
