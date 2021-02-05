/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const DEVICE = Dimensions.get('screen');

const Login = (props) => {
  const role = props.route.params.role;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.image} source={require('../Images/logo.png')} />
      </View>
      <View style={styles.bottomView}>
        <TextInput
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(e) => setId(e)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="PASSWORD"
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            if (id.length <= 0 || password.length <= 0) {
              Alert.alert('Textbox harus di isi');
            } else {
              props.login(id, password);
            }
          }}>
          <View style={styles.button}>
            {props.loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.textButton}>LOGIN</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Register', {role})}>
          <View style={styles.registerContainer}>
            <Text>
              Belum punya akun? silahkan
              <Text style={styles.registerText}> Register</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: DEVICE.width,
    height: DEVICE.height,
    backgroundColor: '#fff',
  },
  image: {
    width: DEVICE.width / 2,
    height: DEVICE.width / 2,
  },
  topView: {
    paddingTop: DEVICE.height / 15,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bottomView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE.width,
    paddingTop: 30,
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    width: DEVICE.width / 1.2,
    height: DEVICE.height / 12,
    padding: 10,
    paddingLeft: 25,
    margin: 10,
    color: '#283054',
    fontWeight: 'bold',
  },
  button: {
    width: DEVICE.width / 1.2,
    height: DEVICE.height / 10,
    backgroundColor: '#75cfb8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  registerContainer: {
    paddingTop: 30,
    width: DEVICE.width / 1.2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  registerText: {
    color: '#75cfb8',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
