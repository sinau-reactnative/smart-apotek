/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DEVICE = Dimensions.get('screen');

const PreLogin = ({navigation}) => {
  const handleClick = (e) => navigation.navigate('login', {role: e});

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require('../Images/logo.png')} />
          <Text style={styles.text}>Selamat Datang,</Text>
          <Text style={styles.subtitle}>Silahkan pilih login sebagai</Text>
        </View>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={() => handleClick('admin')}>
          <View style={styles.button}>
            <Text style={styles.textButton}>ADMIN</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={() => handleClick('user')}>
          <View style={styles.button}>
            <Text style={styles.textButton}>USER</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={() => handleClick('driver')}>
          <View style={styles.button}>
            <Text style={styles.textButton}>DRIVER</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

export default PreLogin;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: DEVICE.height / 10,
    width: DEVICE.width,
    height: DEVICE.height,
  },
  image: {
    width: DEVICE.width / 2,
    height: DEVICE.width / 2,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#0f4c75',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#0f4c75',
  },
  button: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE.width / 1.5,
    height: DEVICE.height / 12,
    backgroundColor: '#75cfb8',
    alignSelf: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
});
