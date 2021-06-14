import React from 'react';
import {Text, View} from 'react-native';
import { COLORS } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Status = () => {
  return (
    <View style={{ 
      justifyContent : 'center',
      width: wp("100%"),
      alignItems : 'center'
     }}>
      <Text
        style={{
          fontFamily: 'Montserrat-ExtraBold',
          fontSize: 18,
          marginTop: 13,
          backgroundColor: 'black',
          color: COLORS.white,
          width: wp(59),
          padding: 10,
        }}>
        Status Lamaran Kamu
      </Text>
    </View>
  );
};

export default Status;
