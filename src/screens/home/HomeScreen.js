import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import TopInfoArea from "../../container/TopInfoArea";
import MenuList from "../../container/MenuList";
import ReviewList from "../../container/ReviewList";
import styles from "../../components/style/style";
import {
  menuItem,
  serviceItem,
  reviewData,
  ratingStarImg,
} from "../../components/data/data";

function HomeScreen(props) {
  const { componentId } = props;
  // const { menuItem, serviceItem, reviewData, ratingStarImg } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <TopInfoArea />
        <MenuList dataList={menuItem} />
        <Text style={styles.subTitle}>이런 서비스는 어때요?</Text>
        <MenuList dataList={serviceItem} />
        <Text style={styles.subTitle}>실제 고객들의 칭찬후기</Text>
        <ReviewList reviewData={reviewData} ratingStarImg={ratingStarImg} />
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
