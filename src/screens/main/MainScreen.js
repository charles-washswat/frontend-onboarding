import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
// components import
import { TouchableOpacityActiveOne } from "../../components/common";
// utils import
import { navUtils } from "../../utils/common";

function MainScreen(props) {
  const { componentId } = props;
  const navData = [
    { text: "Go to the HomeScreen", name: "HomeScreen", idx: 0 },
    { text: "Go to the MypageScreen", name: "MypageScreen", idx: 1 },
  ];

  const navButton = ({ text, onPress, idx }) => {
    return (
      <View style={styles.buttonContainer} key={idx}>
        <TouchableOpacityActiveOne style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacityActiveOne>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {navData.map((data) => {
        return navButton({
          text: data.text,
          onPress: () => navUtils.navPush({ componentId, name: data.name }),
          idx: data.idx,
        });
      })}
    </SafeAreaView>
  );
}

MainScreen.options = {
  topBar: {
    title: {
      text: "Main",
      color: "white",
    },
    background: {
      color: "#4d089a",
    },
  },
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  buttonContainer: {
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4d089a",
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    height: 50,
  },
  buttonText: {
    color: "white",
  },
});

export default MainScreen;
