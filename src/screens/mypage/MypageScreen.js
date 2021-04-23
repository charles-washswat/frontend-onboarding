import React, { Component } from 'react';
import {SafeAreaView} from 'react-native';
import iconList from '../../components/data/iconMenuList'
import textMenuList from '../../components/data/textMenuList'
import CSmenuList from '../../components/data/CSmenuList'
import testUser from '../../components/data/testUser.json'
import styles from '../../components/common/style/myPageStyle'
import menuBuilder from '../../Container/menuContainer/menuBuilder'
import printUser from '../../components/printFunction/printUser'


function mainPage(props){
  const {componentId} = props;
  return(
    <SafeAreaView style={styles.Container}>
    {printUser(testUser)} 
    {menuBuilder('icon',iconList)}
    {menuBuilder('text',textMenuList)}
    {menuBuilder('text',CSmenuList)}
    </SafeAreaView>
  );
}



export default mainPage;



