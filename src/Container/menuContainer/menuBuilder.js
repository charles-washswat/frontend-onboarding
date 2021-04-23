import React, { Component } from 'react';
import {View} from 'react-native';
import {navUtils} from '../../utils/common';
import printIcon from '../../components/printFunction/printIcon';
import printTextMenu from '../../components/printFunction/printTextMenu';
import styles from '../../components/common/style/myPageStyle'

function menuBuilder(type,props){
  if(type == 'icon'){
    return (
      <View style={styles.iconContainer}> 
        {props.map((data) => {
              return printIcon({
                text: data.text,
                file: data.file,
                onPress: () => navUtils.navPush({componentId, name: data.type}),
              });
            })}
        </View>   
    );  
  }
  else if(type == 'text'){
    return (
      <View style={styles.menuContainer}> 
        {props.map((data) => {
              return printTextMenu({
                text: data.text,
                title: data.title,
                onPress: () => navUtils.navPush({componentId, name: data.type}),
              });
            })}
        </View>   
    );  
  }
};

export default menuBuilder;