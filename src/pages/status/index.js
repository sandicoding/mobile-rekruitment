import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {COLORS} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class Status extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          width: wp('100%'),
          alignItems: 'center',
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
        <ScrollView
          style={{
            backgroundColor: '#F8F8F8',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              marginTop: 10,
              flexDirection: 'row',
              borderRadius: 10,
              height: 60,
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                backgroundColor: '#DFDFDF',
                borderRadius: 5,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/image/pentool.png')}
                style={{width: wp(6), height: hp(6)}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp(70),
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 13,
                  }}>
                  Graphic Designer
                </Text>
                <View
                  style={{
                    backgroundColor: '#A0E7E5',
                    borderRadius: 5,
                    width: wp(25),
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      color: '#050A30',
                      opacity: 0.5,
                    }}>
                    menunggu
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailStatus')}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 18,
                    marginTop: 10,
                    color: '#125d98',
                  }}>
                  Detail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Status;
