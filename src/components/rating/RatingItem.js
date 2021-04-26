import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../style/review";
// import data from "../data/data";

// const getRateSrc = (rate, rateArrImg) => {
//   let imgSrc = "";
//   let newRate = rateArrImg.find((info) => info.rate === rate);
//   if (newRate) {
//     imgSrc = newRate.src;
//   }
//   return imgSrc;
// };

function RatingItem(props, idx) {
  const {
    datalist,
    reviewrate,
    reviewRateArr,
    rateImg,
    reviewSortText,
  } = props;
  return (
    <View style={styles.reviewScope}>
      {reviewSortText.map((item) => {
        // let rateReviewImg = getRateSrc(datalist.rate, reviewrate);
        console.log(datalist.rate, "datalist");
        return (
          <View style={styles.areaScope} key={item.id}>
            <Text>{item.sortText}</Text>
            {/* <Image source={rateReviewImg} /> */}
          </View>
        );
      })}
      {/* <View style={styles.areaScope}>
        <Text>배송</Text>
        <Image source={rateImg} />
      </View>
      <View style={styles.areaScope}>
        <Text>세탁</Text>
        <Image source={rateImg} />
      </View> */}
    </View>
  );
}

export default RatingItem;
