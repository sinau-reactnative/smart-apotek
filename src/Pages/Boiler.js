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
import Header from '../components/Header';

const DEVICE = Dimensions.get('screen');

const History = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header name="HISTORY" onOpen={() => navigation.openDrawer()} />
        <Text>Halaman History</Text>
      </View>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: DEVICE.width,
    height: DEVICE.height,
    backgroundColor: '#fff',
  },
});
