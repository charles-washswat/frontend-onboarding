import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../style/item";

function MenuItem(props) {
  const { list } = props;
  return (
    <View style={styles.menuItem}>
      <Image style={styles.menuIcon} source={list.menuIcon} />
      <Text style={styles.menuText}>{list.menuText}</Text>
    </View>
  );
}

export default MenuItem;
