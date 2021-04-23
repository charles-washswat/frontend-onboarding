import React from "react";
import { Image, Text, View } from "react-native";
import RatingItem from "../components/rating/RatingItem";
import styles from "../components/style/review";

const getRateSrc = (rate, rateArrImg) => {
  let imgSrc = "";
  let newRate = rateArrImg.find((info) => info.rate === rate);
  if (newRate) {
    imgSrc = newRate.src;
  }
  return imgSrc;
};

function ReviewList(props) {
  const { reviewdata, reviewrate } = props;
  console.log(reviewdata, "review");
  return (
    <>
      {reviewdata.map((item) => {
        let rateImg = getRateSrc(item.rate, reviewrate);
        console.log(item.rate, "rate11");
        const rate = item.rate;
        console.log(rate, "ok");
        return (
          <View style={styles.reviewArea} key={item.id}>
            <View style={styles.titleBox}>
              <Text style={styles.reviewTitle}>{item.user}</Text>
              <Text style={styles.reviewCount}>
                세특 {item.use_count}회차 · {item.date}
              </Text>
            </View>
            <RatingItem
              datalist={item}
              reviewrate={reviewrate}
              rateImg={rateImg}
            />
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
