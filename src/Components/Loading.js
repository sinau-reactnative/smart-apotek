/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Modal, ActivityIndicator, View} from 'react-native';

const Loading = ({isLoading}) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isLoading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color="#EE6C87"
            animating={isLoading}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000090',
    zIndex: 9,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 10,
  },
});
