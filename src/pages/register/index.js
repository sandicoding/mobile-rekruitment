import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {registerAction} from '../../config/redux/action/AuthAction';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      no_telpon: '',
      alamat: '',
      password: '',
    };
  }

  handleChangeText = (type, e) => {
    this.setState(prevState => ({
      ...prevState,
      [type]: e,
    }));
  };

  handelClickRegister = () => {
    const {registerAction, navigation} = this.props;
    const {name, email, no_telpon, alamat, password} = this.state;
    const dataRegister = {
      name,
      email,
      no_telpon,
      alamat,
      password,
    };
    registerAction(dataRegister, navigation);
  };

  render() {
    const {userInfo} = this.props;

    console.warn(userInfo);

    return (
      <ScrollView>
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
            }}
          >
            Register
          </Text>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#B0B0B0"
              style={{
                fontFamily: 'Montserrat-Medium',
                paddingHorizontal: 20,
                width: wp('80%'),
              }}
              onChangeText={e => this.handleChangeText('name', e)}
            />
          </View>

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

          <View style={styles.inputView}>
            <TextInput
              placeholder="No Telpon"
              placeholderTextColor="#B0B0B0"
              style={{
                fontFamily: 'Montserrat-Medium',
                paddingHorizontal: 20,
                width: wp('80%'),
              }}
              onChangeText={e => this.handleChangeText('no_telpon', e)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Alamat"
              placeholderTextColor="#B0B0B0"
              style={{
                fontFamily: 'Montserrat-Medium',
                paddingHorizontal: 20,
                width: wp('80%'),
              }}
              onChangeText={e => this.handleChangeText('alamat', e)}
            />
          </View>

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

          <Text style={styles.forgot_button}>
            anda punya akun ?{' '}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={{color: 'blue'}}> Login </Text>
            </TouchableOpacity>
          </Text>

          {/* <TouchableOpacity style={styles.loginBtn} onPress={() => this.handelClickRegister()}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity> */}
          {/* <Button title="Loading button" loading /> */}
          <TouchableOpacity>
            {!userInfo.loading ? (
              <Button
                onPress={() => this.handelClickRegister()}
                buttonStyle={{
                  width: wp(80),
                  borderRadius: 10,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40,
                  backgroundColor: 'black',
                  marginBottom: 20,
                }}
                title="register"
              />
            ) : (
              <Button
                buttonStyle={{
                  width: wp(80),
                  borderRadius: 10,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40,
                  backgroundColor: 'black',
                  marginBottom: 20,
                }}
                title="Loading button"
                loading
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 40,
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
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
  },
});

const mapStateToprops = ({register}) => ({
  userInfo: register,
});

export default connect(mapStateToprops, {registerAction})(Register);
