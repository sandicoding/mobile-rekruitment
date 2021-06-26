import React from 'react';

import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FONTS, COLORS} from '../constants';

const IconTabs = ({focused, icon, label}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: wp(10),
          height: hp(4),
          tintColor: focused ? COLORS.white : COLORS.secondary,
        }}
      />
      {focused && (
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default IconTabs;
