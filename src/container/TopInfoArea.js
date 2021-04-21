import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function TopInfoArea() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.chatbot}
          source={require("../../assets/image/home/chatbot/ic_chat.png")}
        />
        <Text style={styles.mainTitle}>
          오늘 신청하면 {"\n"}목요일 새벽 배송
        </Text>
      </View>
      <View style={styles.addressBox}>
        <Text style={styles.addressText} numberOfLines={1} ellipsizeMode="tail">
          서울 강남구 테헤란로 100 세특아파트 123동 1003호
        </Text>
        <Image
          style={styles.arrow}
          source={require("../../assets/image/home/arrow/icon_arrow.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mainTitle: {
    paddingTop: 72,
    fontSize: 24,
    fontWeight: "bold",
    color: "#181818",
    lineHeight: 33,
  },
  chatbot: {
    position: "absolute",
    top: 12,
    right: -8,
  },
  addressBox: {
    marginTop: 20,
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#f7f7f8",
  },
  addressText: {
    width: "92%",
    fontSize: 16,
  },
  arrow: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

export default TopInfoArea;
