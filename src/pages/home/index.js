import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h1,
          }}>
          Welcome, Here
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          Mari bekerja sama bersama kami !
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
            marginTop: 20,
          }}>
          CV Jaya Bersama adalah perusahan Agency dari perbankan disini anda
          akan menemukan pengalaman baru bersama kami !
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 350,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#34495e',
    marginTop: 30,
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    flex: 1,
  },
});

export default Home;
