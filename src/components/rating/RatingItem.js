import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../style/review";
import data from "../data/data";

function RatingItem(props) {
  const { datalist, reviewrate, rateImg } = props;
  return (
    <View style={styles.reviewScope}>
      <View style={styles.areaScope}>
        <Text>수거</Text>
        <Image source={rateImg} />
      </View>
      <View style={styles.areaScope}>
        <Text>배송</Text>
        <Image source={rateImg} />
      </View>
      <View style={styles.areaScope}>
        <Text>세탁</Text>
        <Image source={rateImg} />
      </View>
    </View>
  );
}

export default RatingItem;
