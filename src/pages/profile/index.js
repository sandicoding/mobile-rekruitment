import React, { useEffect , useState } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import { useDispatch ,useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {COLORS, FONTS} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UpdatePhoto, logout} from '../../config/redux/action/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';
import { TouchableOpacity } from 'react-native';
import {Root, Toast} from 'popup-ui';


const Profile = (props) => {
// const state = useSelector(state => state)
const [ name , setName ] = useState()
const [ email , setEmail ] = useState()
const [ no_telpon , setNoTelpon ] = useState()
const [ alamat , setAlamat ] = useState()
const [ avatar , setAvatar ] = useState()


const dispatch = useDispatch()

const UpdatePhotos = useSelector(state => state.UserUpdatePhoto);


const { userInfo, loading } = UpdatePhotos




// const { name, email, no_telpon, alamat } = auth?.dataUser

useEffect(() => {
    const check = async () => {
      const user = await AsyncStorage.getItem('user');
      const data = JSON.parse(user);

     
      setName(data.name)
      setEmail(data.email)
      setNoTelpon(data.no_telpon)
      setAlamat(data.alamat)
      setAvatar(avatar ? userInfo : data.profile_photo_path)
      
    };

    check();
    
},[dispatch])


const fileDocument = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],  
        });

        if(!res.cancelled) {
          const data = new FormData();

          data.append('file', {
            name: res.name,
            uri: res.uri,
            type: res.type,
          });

          dispatch(UpdatePhoto(data))

          
          setAvatar(userInfo);
        }

        Toast.show({
          title: 'Pengajuan Berhasil',
          text: 'Pengajuan Kamu berhasil ',
          color: '#2ecc71',
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

const handlerLogout = () => {
  
  dispatch(logout());
}
    return (
      <Root>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: 'black',
              width: wp(39),
              padding: 10,
              alignItems: 'center',
              marginLeft: 100,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-ExtraBold',
                fontSize: 18,
                marginTop: 13,
                color: COLORS.white,
              }}>
              User Profile
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 25,
              backgroundColor: 'white',
              borderRadius: 8,
              marginTop: 20,
              marginHorizontal: 17,
              width: wp('90%'),
              height: hp('16%'),
            }}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              { loading ? (
                <Text>Loading</Text>
              ) : (
                <>
                <TouchableOpacity
                style={{
                  borderWidth: 3,
                  borderRadius: 50,
                  borderColor: '#055052',
                }}
                onPress={fileDocument}>
                <Avatar.Image
                  source={{
                    uri: `https://recruitment.yudicandra.web.id/storage/${avatar}`,
                  }}
                  size={80}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: -28,
                  backgroundColor: '#EEEEEE',
                  marginTop: 60,
                  padding: 2,
                  borderRadius: 20,
                }}>
                <Icon name="pencil" color="#777777" size={20} />
              </View>
              </>
              )}
              
              <View style={{marginLeft: 20}}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 15,
                      marginBottom: 5,
                    },
                  ]}>
                  {name}
                </Title>
                <Caption
                  style={{
                    fontSize: 14,
                    lineHeight: 14,
                    fontWeight: '500',
                    color: '#50CB93',
                  }}>
                  Akun Active
                </Caption>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 8,
              marginHorizontal: 17,
              width: wp('90%'),
              height: hp('16%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>{alamat}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {no_telpon}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>{email}</Text>
            </View>
          </View>
          <View style={styles.menuWrapper}>
            {/* <TouchableRipple onPress={() => props.navigation.navigate('EditProfile')}>
            <View style={styles.menuItem}>
              <Icon name="account-settings" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple> */}
            <TouchableRipple onPress={() => handlerLogout()}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableRipple>
          </View>
        </SafeAreaView>
      </Root>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  menuWrapper: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 17,
    width: wp('90%'),
    height: hp('10%'),
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile