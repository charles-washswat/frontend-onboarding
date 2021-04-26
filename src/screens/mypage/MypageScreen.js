import React, { Component } from 'react';
import {SafeAreaView} from 'react-native';
import iconList from '../../components/data/iconMenuList'
import textMenuList from '../../components/data/textMenuList'
import CSmenuList from '../../components/data/CSmenuList'
import testUser from '../../components/data/testUser.json'
import styles from '../../components/common/style/myPageStyle'
import iconMenuBuilder from '../../Container/menuContainer/iconMenuBuilder'
import textMenuBuilder from '../../Container/menuContainer/textMenuBuilder'
import printUser from '../../components/printFunction/printUser'


function mainPage(props){
  const {componentId} = props;
  return(
    <SafeAreaView style={styles.Container}>
    {printUser(testUser)} 
    {iconMenuBuilder(iconList)}
    {textMenuBuilder(textMenuList)}
    {textMenuBuilder(CSmenuList)}
    </SafeAreaView>
  );
}



export default mainPage;



