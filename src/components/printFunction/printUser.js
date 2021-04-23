import React, { Component } from 'react';
import {Text} from 'react-native';
import styles from '../../components/common/style/myPageStyle'

function printUser(props){
    return(
      <Text style={styles.nameStyle}>{
        props.nickName}씨
      </Text>
    );
  };
  
  export default printUser;
  