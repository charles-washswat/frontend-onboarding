import React from "react";
import { Image, Text, View } from "react-native";
import style from "../components/style/style";

function ReviewList(props) {
  const { data } = props;
  return (
    <>
      <Text style={style.subTitle}>실제 고객들의 칭찬후기</Text>
      <View style={style.reviewArea}>
        <View style={style.titleBox}>
          <Text style={style.reviewTitle}>{data.title}</Text>
          <Text style={style.reviewCount}>
            세특 {data.count}회차 · {data.day}
          </Text>
        </View>
        <View style={style.reviewScope}>
          <View style={style.areaScope}>
            <Text>{data.collection}</Text>
            <Image source={data.collectionStar} />
          </View>
          <View style={style.areaScope}>
            <Text>{data.delivery}</Text>
            <Image source={data.deliveryStar} />
          </View>
          <View style={style.areaScope}>
            <Text>{data.laundry}</Text>
            <Image source={data.laundryStar} />
          </View>
        </View>
        <Text style={style.reviewText} numberOfLines={3} ellipsizeMode="tail">
          {data.description}
        </Text>
      </View>
    </>
  );
}

export default ReviewList;
