import React from "react";
import { Image, Text, View } from "react-native";
import RatingItem from "../components/rating/RatingItem";
import styles from "../components/style/review";

function ReviewList(props) {
  const { reviewData, ratingStarImg } = props;
  return (
    <>
      {reviewData.map((item) => {
        const rate = item.rate;
        return (
          <View style={styles.reviewArea} key={item.id}>
            <View style={styles.titleBox}>
              <Text style={styles.reviewTitle}>{item.user}</Text>
              <Text style={styles.reviewCount}>
                세특 {item.use_count}회차 · {item.date}
              </Text>
            </View>
            <RatingItem rateData={rate} ratingStarImg={ratingStarImg} />
            <Text
              style={styles.reviewText}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {item.description}
            </Text>
          </View>
        );
      })}
    </>
  );
}

export default ReviewList;
