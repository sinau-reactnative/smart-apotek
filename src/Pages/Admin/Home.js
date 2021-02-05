/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';

const DEVICE = Dimensions.get('screen');

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header name="Home" onOpen={() => navigation.openDrawer()} />
        <Text>Halaman Home</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: DEVICE.width,
    height: DEVICE.height,
    backgroundColor: '#fff',
  },
});
