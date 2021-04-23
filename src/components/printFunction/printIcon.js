import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import {TouchableOpacityActiveOne} from '../common';
import styles from '../../components/common/style/myPageStyle'

function printIcon(props){
  console.log(props);
    return (
        <View style ={styles.iconStyle}>
        <TouchableOpacityActiveOne onPress={props.onPress}>
          <Image source={props.file} />
          <Text style={styles.iconText}>{props.text}</Text>
        </TouchableOpacityActiveOne>
        </View>
    );
};

export default printIcon;