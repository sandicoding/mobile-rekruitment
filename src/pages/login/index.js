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
    const {isLogin} = this.props;
    console.warn(isLogin);
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/image/logocv.png')}
        />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={e => this.handleChangeText('email', e)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={e => this.handleChangeText('password', e)}
          />
        </View>

        <Text style={styles.forgot_button}>
          anda belum punya akun ?{' '}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{color: 'blue'}}> Register </Text>
          </TouchableOpacity>
        </Text>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
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
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  loginText: {
    color: 'white',
  },
});

const mapStateToprops = ({auth}) => ({
  isLogin: auth.isLoggin,
});

export default connect(mapStateToprops, {login})(Login);
