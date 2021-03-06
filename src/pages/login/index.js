import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../../config/redux/action/AuthAction';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeText = (type, e) => {
    this.setState(prevState => ({
      ...prevState,
      [type]: e,
    }));
  };
  
  

  handelClickLogin = () => {
    const {navigation, login} = this.props;
    const {email, password} = this.state;
    const data = {
      email,
      password,
    };
    login(data, navigation);
  };

  render() {
    const {isLogin, isLoading, message} = this.props;
   
    if (isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Image
            source={require('../../assets/image/loader.gif')}
            style={{width: wp(50), height: hp(50)}}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/image/iconJob.png')}
        />
        <Text
          style={{
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 18,
            marginTop: 13,
          }}>
          Login
        </Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#B0B0B0"
            style={{
              fontFamily: 'Montserrat-Medium',
              paddingHorizontal: 20,
              width: wp('80%'),
            }}
            onChangeText={e => this.handleChangeText('email', e)}
          />
        </View>
        {message?.email && (
          <Text
            style={{
              color: 'red',
              marginTop: 6,
            }}>
            Email pastikan terisi dengan benar!
          </Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#B0B0B0"
            style={{
              fontFamily: 'Montserrat-Medium',
              paddingHorizontal: 20,
              width: wp('80%'),
            }}
            secureTextEntry={true}
            onChangeText={e => this.handleChangeText('password', e)}
          />
        </View>
        {message?.password && (
          <Text
            style={{
              color: 'red',
              marginTop: 6,
            }}>
            password pastikan terisi dengan benar!
          </Text>
        )}

        <View style={styles.viewInfo}>
          <Text style={styles.forgot_button}>anda belum punya akun ? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{color: 'blue'}}> Register </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => this.handelClickLogin()}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },

  inputView: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    
    
  },
  viewInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row',
    marginTop : 10
  },

  loginBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
  },
});

const mapStateToprops = ({auth}) => ({
  isLogin: auth.isLoggin,
  message : auth.message,
  isLoading: auth.isLoading,
});

export default connect(mapStateToprops, {login})(Login);
