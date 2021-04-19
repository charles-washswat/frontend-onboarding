import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function MypageScreen(props) {
  const {componentId} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>MypageScreen</Text>
    </SafeAreaView>
  );
}

MypageScreen.options = {
  topBar: {
    title: {
      text: 'Mypage',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default MypageScreen;
