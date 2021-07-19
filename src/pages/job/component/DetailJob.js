import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
  Box
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import {listJobsDetails} from '../../../config/redux/action/JobAction'; 
import {applyJob} from '../../../config/redux/action/MyApplyAction'; 
import {List} from '../../../Loader';
import RenderHtml from 'react-native-render-html';
import {Root, Toast} from 'popup-ui';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {format} from 'date-fns';



const DetailJob = (props) =>  {
    
    const {idJob} = props.route.params;
    const { navigation } = props
    const [ uri , setUri ] = useState()
    const [date, setDate] = useState();
    const [ fileName , setFileName ] = useState()
    const dispatch = useDispatch()

    const jobDetail = useSelector(state => state.jobsDetails );
    const applys = useSelector(state => state.apply);
    const {errorApply , loadingApply, apply} = applys;
    const { loading , error, jobsDetail } = jobDetail

      

    useEffect(() => {
        dispatch(listJobsDetails(idJob))
    },[dispatch, idJob])


    
    const fileDocument = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
          type: [DocumentPicker.types.pdf],
        });

        if(!res.cancelled) {
          setUri({res});
          setFileName(res.name);
        }
        
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


    const submitHandler = () => {
      
      const data = new FormData()

      data.append('file',{
        name : uri?.res.name,
        uri: uri?.res.uri,
        type : uri?.res.type
      });

      if(fileName){
        console.warn(data);
        dispatch(applyJob(data, idJob, navigation));
        Toast.show({
          title: 'Pengajuan Berhasil',
          text: 'Pengajuan Kamu berhasil ',
          color: '#2ecc71',
        });

        setFileName(null);
      }else {
        Toast.show({
          title: 'Berkas Belum diunggah',
          color: '#FF3D68',
          callback: () => Popup.hide(),
        });
      }
      

    }
    
    const { created_at} = jobsDetail
    
    let tanggal = created_at?.split("T")[0]
    

    
    return (
      <Root>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#f8f8f8',
              height: hp(110),
              paddingHorizontal: 20,
            }}>
            <ImageBackground
              source={require('../../../assets/image/dev2.png')}
              style={{marginLeft: 50, width: wp(100), height: hp(30)}}>
              <View
                style={{
                  backgroundColor: '#000',
                  height: hp(5),
                  width: wp(10),
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
            {loading ? (
              <List />
            ) : (
              <View>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    padding: 10,
                    borderRadius: 15,
                    marginTop: 20,
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
                        {jobsDetail?.name}
                      </Text>

                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            fontFamily: 'ExtraBold',
                            color: '#000',
                            opacity: 0.6,
                            fontSize: 14,
                          }}>
                          Tanggal Open : {tanggal}
                        </Text>
                      </View>
                    </View>
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
                      {jobsDetail?.pengalaman}
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
                      {jobsDetail?.type}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    borderRadius: 15,
                    padding: 20,
                    marginTop: 20,
                    width: wp(90),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-ExtraBold',
                      fontSize: 20,
                      marginBottom: 10,
                    }}>
                    Diskripsi Pekerjaan
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      color: '#B2B2B2',
                    }}>
                    {jobsDetail?.description}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-ExtraBold',
                      marginVertical: 20,
                      fontSize: 15,
                    }}>
                    Unggah CV/Resume, format PDF
                  </Text>
                  <TouchableOpacity
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={fileDocument}>
                    {fileName ? (
                      <View
                        style={{
                          fontFamily: 'Montserrat-Bold',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../assets/image/pdf-icon.png')}
                          style={{width: 30, height: 30}}
                        />
                        <Text>{fileName}</Text>
                      </View>
                    ) : (
                      <>
                        <Icon name="upload" color="#FF6347" size={25} />
                        <Text>Unggah</Text>
                      </>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}

            <View
              style={{
                width: wp(100),
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => submitHandler()}>
                <View
                  style={{
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp(90),
                    height: hp(7),
                    marginTop: 30,
                    borderRadius: 15,
                    marginLeft: -39,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 20,
                    }}>
                    Lamar Lowongan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Root>
    );
  
}

export default DetailJob
