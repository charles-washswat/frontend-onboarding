import React, { Component } from "react";
import { View } from "react-native";
import { navUtils } from "../../utils/common";
import printTextMenu from "../../components/printFunction/printTextMenu";
import styles from "../../components/common/style/myPageStyle";

function TextMenuBuilder(props) {
  return (
    <View style={styles.menuContainer}>
      {props.data.map((data) => {
        return printTextMenu({
          text: data.text,
          title: data.title,
          onPress: () => navUtils.navPush({ componentId, name: data.type }),
        });
      })}
    </View>
  );
}

export default TextMenuBuilder;
