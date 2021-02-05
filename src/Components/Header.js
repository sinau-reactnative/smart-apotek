import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DEVICE = Dimensions.get('screen');

const Header = ({name, onOpen}) => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.col1}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <TouchableNativeFeedback onPress={() => onOpen()}>
        <View style={styles.menu}>
          <Icon name="menu" size={26} color="#fff" />
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: DEVICE.width,
    height: DEVICE.height / 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#75cfb8',
  },
  col1: {
    width: DEVICE.width,
    alignItems: 'center',
  },
  menu: {width: 50, alignItems: 'flex-end', position: 'absolute', right: 10},
  headerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
