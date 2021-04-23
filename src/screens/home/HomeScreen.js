import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import TopInfoArea from "../../container/TopInfoArea";
import MenuList from "../../container/MenuList";
import ReviewList from "../../container/ReviewList";
import styles from "../../components/style/style";
import data from "../../components/data/data";

function HomeScreen(props) {
  const { componentId } = props;
  const { menuData, serviceData, reviewDataList, ratingImg } = data().props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <TopInfoArea />
        <MenuList datalist={menuData} />
        <Text style={styles.subTitle}>이런 서비스는 어때요?</Text>
        <MenuList datalist={serviceData} />
        <Text style={styles.subTitle}>실제 고객들의 칭찬후기</Text>
        <ReviewList reviewdata={reviewDataList} reviewrate={ratingImg} />
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.options = {
  topBar: {
    title: {
      text: "Home",
      color: "white",
    },
    background: {
      color: "#4d089a",
    },
  },
};

export default HomeScreen;
