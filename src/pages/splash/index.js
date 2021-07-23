import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnime: new Animated.Value(0),
      logoText: new Animated.Value(0),
      loadingSpinner: false,
    };
  }

  async componentDidMount() {
    const {logoAnime, logoText} = this.state;
    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start(),

      Animated.timing(logoText, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });

    
    // const IsLogin = await AsyncStorage.getItem('access_token');

    // if(IsLogin) { 
    //   this.props.navigation.navigate('MainLayout');
    // }
  

    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}>
        <Animated.View
          style={{
            opacity: this.state.logoAnime,
            top: this.state.logoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image
            style={{
              marginBottom: 20,
              width: 100,
              height: 100,
            }}
            source={require('../../assets/image/iconJob.png')}
          />
        </Animated.View>

        <Animated.View
          style={{
            opacity: this.state.logoText,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-ExtraBold',
              fontSize: 20,
            }}>
            Karir CV Jaya Bersama
          </Text>
        </Animated.View>
      </View>
    );
  }
}
