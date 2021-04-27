import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacityActiveOne } from "../../components/common";
import { navUtils } from "../../utils/common";
import iconList from "../../components/data/iconMenuList";
import textMenuList from "../../components/data/textMenuList";
import CSmenuList from "../../components/data/CSmenuList";
import testUser from "../../components/data/testUser.json";

function mainPage(props) {
  const { componentId } = props;
  return (
    <SafeAreaView style={styles.Container}>
      {printUser(props)}
      {menuBuilder("icon", iconList)}
      {menuBuilder("text", textMenuList)}
      {menuBuilder("text", CSmenuList)}
    </SafeAreaView>
  );
}

function menuBuilder(type, props) {
  if (type == "icon") {
    return (
      <View style={styles.iconContainer}>
        {props.map((data) => {
          return iconMenu({
            text: data.text,
            file: data.file,
            onPress: () => navUtils.navPush({ componentId, name: data.type }),
          });
        })}
      </View>
    );
  } else if (type == "text") {
    return (
      <View style={styles.menuContainer}>
        {props.map((data) => {
          return printMenu({
            text: data.text,
            title: data.title,
            onPress: () => navUtils.navPush({ componentId, name: data.type }),
          });
        })}
      </View>
    );
  }
}

function iconMenu(props) {
  console.log(props);
  return (
    <View style={styles.iconStyle}>
      <TouchableOpacityActiveOne onPress={props.onPress}>
        <Image source={props.file} />
        <Text style={styles.iconText}>{props.text}</Text>
      </TouchableOpacityActiveOne>
    </View>
  );
}

function printMenu(props) {
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

function printUser(props) {
  return <Text style={styles.nameStyle}>{testUser.nickName}씨</Text>;
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 80,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  iconStyle: {
    //position: "relative",
    height: 80,
    width: 56,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
  },
  iconText: {
    textAlign: "center",
  },
  menuContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1.5,
  },
  menuStyle: {
    top: 24,
  },
  menuTextStyle: {
    height: 48,
    width: 375,
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: 15,
  },
  categoryStyle: {
    height: 17,
    width: "auto",
    color: "#c4c4c4",
    fontSize: 12,
  },
  nameStyle: {
    width: 232,
    height: 32,
    top: 52,
    flex: 1,
    fontSize: 24,
    color: "black",
    bottom: 8,
    fontWeight: "bold",
  },
});

export default mainPage;
