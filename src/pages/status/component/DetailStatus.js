import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux'
import {listMyApplyDetails} from '../../../config/redux/action/MyApplyAction';
import {List} from '../../../Loader';
import RenderHtml from 'react-native-render-html';
const DetailStatus = (props) =>  {
  const {idJob} = props.route.params;
  const dispatch = useDispatch();

  const myAppyDetail = useSelector(state => state.DetailApply)

  const { loading , error , apply } = myAppyDetail

  
  

  useEffect(() => {
    dispatch(listMyApplyDetails(idJob))
  }, [dispatch])
    
    

    return (
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {loading ? (
          <List />
        ) : (
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
                  onPress={() => props.navigation.navigate('MainLayout')}>
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
                    {apply?.job?.name}
                  </Text>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'ExtraBold',
                        color: '#000',
                        opacity: 0.6,
                        fontSize: 14,
                      }}>
                      -
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
                  {apply?.job?.pengalaman}
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
                  {apply?.job?.type}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
                width: wp(80),
                overflow: 'hidden',
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
                  width: wp('100%'),
                }}>
                {/* <RenderHtml contentWidth={width} source={source} /> */}
                {apply?.job.description}
              </Text>
            </View>
            <View
              style={{
                backgroundColor:
                  apply?.status === 'diterima'
                    ? '#2541B2'
                    : apply?.status === 'menunggu'
                    ? '#01937C'
                    : '#D83A56',
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  marginBottom: 10,
                  color: '#fff',
                }}>
                Status Lamaran
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color: '#fff',
                  fontSize: 18,
                }}>
                {apply?.status}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
                marginBottom: 50,
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
                {apply?.description}
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
        )}
      </ScrollView>
    );
  
}


export default DetailStatus