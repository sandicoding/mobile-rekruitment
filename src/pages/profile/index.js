import React from 'react';
import {ImageBackground, Text, View, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../constants';

const Profile = () => {
  return (
    <ImageBackground
      source={require('../../assets/image/back2.png')}
      style={{width: '100%', height: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: wp(40),
          height: hp(22),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          borderRadius: 110,
          backgroundColor: 'black',
          overflow: 'hidden',
          borderWidth: 5,
          borderColor: 'white',
        }}>
        <ImageBackground
          source={require('../../assets/image/bg.jpg')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}></ImageBackground>
      </View>

      <Text
        style={{
          marginTop: 20,
          color: COLORS.white,
          ...FONTS.h1,
        }}>
        Sandi Pratama
      </Text>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h6,
        }}>
        sandi@gmail.com
      </Text>
    </ImageBackground>
  );
};

export default Profile;
