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

const Register = (props) => {
  const role = props.route.params.role;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          textContentType="emailAddress"
          placeholder="EMAIL"
          onChangeText={(e) => setId(e)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="WA NUMBER"
          onChangeText={(e) => setId(e)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="PASSWORD"
          onChangeText={(e) => setPassword(e)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="RETYPE PASSWORD"
          onChangeText={(e) => setRePassword(e)}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            if (id.length <= 0 || password.length <= 0) {
              Alert.alert('Textbox harus di isi');
            } else {
              //   props.register(id, password);
              console.log(id, password, rePassword);
              props.navigation.goBack();
            }
          }}>
          <View style={styles.button}>
            {props.loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.textButton}>REGISTER</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: DEVICE.width,
    height: DEVICE.height,
    backgroundColor: '#fff',
  },
  bottomView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE.width,
    height: DEVICE.height / 1.3,
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
});
