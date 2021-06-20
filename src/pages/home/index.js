import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class Home extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#F8F8F8',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: '#B0B0B0',
            marginTop: 40,
            fontFamily: 'Montserrat-Bold',
          }}>
          Hello, Sandi Pratama
        </Text>

        <Text
          style={{
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 18,
            marginTop: 13,
          }}>
          Temukan Pekerjaan Terbaikmu !
        </Text>

        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 5,
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor="#B0B0B0"
            style={{
              fontFamily: 'Montserrat-Medium',
              paddingHorizontal: 20,
              width: wp(75),
            }}
          />
          <View
            style={{
              backgroundColor: '#000000',
              width: wp(10),
              height: hp(5),
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../assets/image/searc.png')} />
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Montserrat-ExtraBold',
            marginVertical: 20,
            fontSize: 15,
          }}>
          Lowongan Tersedia
        </Text>

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
                  backgroundColor: '#DFDFDF',
                  borderRadius: 5,
                  width: 70,
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Text
                  style={{fontFamily: 'Medium', color: '#000', opacity: 0.5}}>
                  Part time
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DetailJob')}>
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
    );
  }
}
