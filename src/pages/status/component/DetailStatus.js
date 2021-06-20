import React from 'react';
import {View, ImageBackground, Image, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class DetailStatus extends React.Component {
  render() {
    const fileDocument = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
    };
    return (
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#f8f8f8',
            height: '100%',
            paddingHorizontal: 20,
          }}>
          <ImageBackground
            source={require('../../../assets/image/dev2.png')}
            style={{marginLeft: 50, width: '100%', height: 250}}>
            <View
              style={{
                backgroundColor: '#000',
                height: 30,
                width: 40,
                marginLeft: -50,
                marginTop: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MainLayout')}>
                <Image
                  source={require('../../../assets/image/back.png')}
                  style={{width: 25, height: 10}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              backgroundColor: '#FFF',
              padding: 10,
              borderRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'ExtraBold',
                  }}>
                  Software Developer
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'ExtraBold',
                      color: '#000',
                      opacity: 0.6,
                      fontSize: 14,
                    }}>
                    Parallel
                  </Text>
                </View>
              </View>
              {/* <View
                            style={{
                            backgroundColor: '#DFDFDF',
                            height: 32,
                            width: 32,
                            borderRadius: 5,
                            marginLeft: 50,
                            marginTop: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <Image
                            source={require('../../../assets/image/favourite.png')}
                            style={{opacity: 0.5, width: 24, height: 24}}
                            />
                        </View> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                alignItems: 'center',
              }}>
              {/* <Image
                            source={require('../../../assets/image/1.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/2.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/3.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/4.jpg')}
                            style={{width: 30, height: 30}}
                        /> */}
              {/* <Text
                            style={{
                            fontFamily: 'Bold',
                            color: '#B8B8B8',
                            paddingHorizontal: 10,
                            }}>
                            4 Friends Work Here
                        </Text> */}
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FFF',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 8,
                width: wp(43),
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-ExtraBold',
                  color: '#B8B8B8',
                }}>
                Pengalaman
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-ExtraBold',
                }}>
                Minimum 2 year
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFF',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 8,
                width: wp(43),
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-ExtraBold',
                  color: '#B8B8B8',
                }}>
                Tipe
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-ExtraBold',
                }}>
                Full Time
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 15,
              padding: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-ExtraBold',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Diskripsi Lowongan
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: '#B2B2B2',
              }}>
              Amet minim mollit non deserunt ulliamco est sit aliqua dolor do
              amet sit. Vellit officoa consequat duis enim velit mollit.
              Extertation venoima consequat sunt notserud amet.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 15,
              padding: 20,
              marginTop: 20,
              backgroundColor: '#A0E7E5',
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-ExtraBold',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Status Lamaran
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: '#050A30',
                fontSize: 18,
              }}>
              Menunggu
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 15,
              padding: 20,
              marginTop: 20,
              marginBottom : 50
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-ExtraBold',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Pesan HRD
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: '#B2B2B2',
              }}>
              Amet minim mollit non deserunt ulliamco est sit aliqua dolor do
              amet sit. Vellit officoa consequat duis enim velit mollit.
              Extertation venoima consequat sunt notserud amet.
            </Text>
          </View>
          {/* <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                width: 90,
                height: 55,
                marginTop: 30,
                borderRadius: 15,
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/image/for.png')}
                style={{width: 30}}
              />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Regular',
                }}>
                Hapus Pengajuana
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}
