import React, { Component } from 'react';
import {Text} from 'react-native';
import styles from '../common/style/myPageStyle'

function PrintUser(props){
    return(
      <Text style={styles.nameStyle}>{
        props.data.nickName}씨
      </Text>
    );
  };
  
  export default PrintUser;
  