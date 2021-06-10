import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const Home = () => {
  return (
    // <View style={styles.mainContainer}>
    //   <View style={styles.container}>
    //     <Text
    //       style={{
    //         color: COLORS.white,
    //         ...FONTS.h1,
    //       }}>
    //       Welcome, Here
    //     </Text>
    //     <Text
    //       style={{
    //         color: COLORS.white,
    //         ...FONTS.h3,
    //       }}>
    //       Mari bekerja sama bersama kami !
    //     </Text>
    //     <Text
    //       style={{
    //         color: COLORS.white,
    //         ...FONTS.h4,
    //         marginTop: 20,
    //       }}>
    //       CV Jaya Bersama adalah perusahan Agency dari perbankan disini anda
    //       akan menemukan pengalaman baru bersama kami !
    //     </Text>
    //   </View>
    // </View>
    <ImageBackground
      source={require('../../assets/image/back.png')}
      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          paddingHorizontal: 40,
          marginTop: 25,
        }}>
        <Text
          style={{
            fontSize: 40,
            color: '#522289',
            fontFamily: 'RobotoBold',
          }}>
          Hello
        </Text>

        <Text
          style={{
            fontSize: 15,
            paddingVertical: 10,

            lineHeight: 22,
            fontFamily: 'RobotoRegular',
            color: COLORS.black,
          }}>
          CV Jaya Bersama adalah perusahan Agency dari perbankan disini anda
          akan menemukan pengalaman baru bersama kami !
        </Text>
      </View>
      <View style={{paddingHorizontal: 40, marginTop: 25}}>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'RobotoRegular',
            marginTop: 50,
            fontSize: 17,
          }}>
          Galeri
        </Text>
      </View>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: 240,
//     width: 350,
//     padding: 15,
//     borderRadius: 20,
//     backgroundColor: '#34495e',
//     marginTop: 30,
//   },
//   mainContainer: {
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//     flex: 1,
//   },
// });

export default Home;
