import React, { Component } from "react";
import { View } from "react-native";
import { navUtils } from "../../utils/common";
import printIcon from "../../components/printFunction/printIcon";
import printTextMenu from "../../components/printFunction/printTextMenu";
import styles from "../../components/common/style/myPageStyle";

function IconMenuBuilder(props) {
  return (
    <View style={styles.iconContainer}>
      {props.data.map((data) => {
        return printIcon({
          text: data.text,
          file: data.file,
          onPress: () => navUtils.navPush({ componentId, name: data.type }),
        });
      })}
    </View>
  );
}

export default IconMenuBuilder;
