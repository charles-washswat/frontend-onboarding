import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacityActiveOne } from "../common";
import styles from "../../components/common/style/myPageStyle";

function printTextMenu(props) {
  if (props.text == "") {
    return (
      <View>
        <Text style={styles.categoryStyle}>{props.title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.menuStyle}>
        <TouchableOpacityActiveOne onPress={props.onPress}>
          <Text style={styles.menuTextStyle}>{props.text}</Text>
        </TouchableOpacityActiveOne>
      </View>
    );
  }
}

export default printTextMenu;
