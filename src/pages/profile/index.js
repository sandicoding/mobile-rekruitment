import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
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

const Profile = (props) => {
const state = useSelector(state => state)

const { auth } = state

const { name, email, no_telpon, alamat } = auth?.dataUser

 
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 18,
            marginTop: 13,
            marginLeft: 150,
            backgroundColor: 'black',
            color: COLORS.white,
            width: wp(35),
            padding: 10,
          }}>
          User Profile
        </Text>
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
            <Avatar.Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/33.jpg',
              }}
              size={80}
            />
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
            <Text style={{color: '#777777', marginLeft: 20}}>{no_telpon}</Text>
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
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-settings" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => props.navigation.navigate('Login')}>
            <View style={styles.menuItem}>
              <Icon name="logout" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
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
    height: hp('30%'),
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