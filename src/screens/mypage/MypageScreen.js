import React, { Component } from 'react';
import {SafeAreaView} from 'react-native';
import iconList from '../../components/data/iconMenuList'
import textMenuList from '../../components/data/textMenuList'
import CSmenuList from '../../components/data/CSmenuList'
import testUser from '../../components/data/testUser.json'
import styles from '../../components/common/style/myPageStyle'
import IconMenuBuilder from '../../Container/menuContainer/IconMenuBuilder'
import TextMenuBuilder from '../../Container/menuContainer/TextMenuBuilder'
import PrintUser from '../../components/printFunction/PrintUser'


function mainPage(props){
  const {componentId} = props;
  return(
    <SafeAreaView style={styles.Container}>
    <PrintUser data = {testUser}></PrintUser>
    <IconMenuBuilder data = {iconList}/>
    <TextMenuBuilder data = {textMenuList}/>
    <TextMenuBuilder data = {CSmenuList}/>

    </SafeAreaView>
  );
}



export default mainPage;



