import React from "react";
import { Image, Text, View } from "react-native";
import style from "../style/style";

function MenuItem(props) {
  const { list } = props;
  return (
    <View style={style.menuItem}>
      <Image style={style.menuIcon} source={list.menuIcon} />
      <Text style={style.menuText}>{list.menuText}</Text>
    </View>
  );
}

export default MenuItem;
