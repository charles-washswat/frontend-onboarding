import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function HomeScreen(props) {
  const {componentId} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
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

export default HomeScreen;
