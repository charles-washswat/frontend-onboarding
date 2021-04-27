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

const getRateSrc = (scope, rateArrImg) => {
  let rateImg = "";
  let newRate = rateArrImg.find((info) => info.scope === scope);
  if (newRate) {
    rateImg = newRate.src;
  }
  return rateImg;
};

function RatingItem(props) {
  const { rateData, ratingStarImg } = props;
  // let scope1 = getRateSrc(rateData.scope1, ratingStarImg);
  // let scope2 = getRateSrc(rateData.scope1, ratingStarImg);
  // let scope3 = getRateSrc(rateData.scope1, ratingStarImg);
  return (
    <View style={styles.reviewScope}>
      {rateData.map((item) => {
        let rateImgData = getRateSrc(item.scope, ratingStarImg);
        return (
          <View style={styles.areaScope} key={item.type}>
            <Text>{item.type}</Text>
            <Image source={rateImgData} />
          </View>
        );
      })}
      {/* <View style={styles.areaScope}>
        <Text>수거</Text>
        <Image source={scope1} />
      </View>
      <View style={styles.areaScope}>
        <Text>배송</Text>
        <Image source={scope2} />
      </View>
      <View style={styles.areaScope}>
        <Text>세탁</Text>
        <Image source={scope3} />
      </View> */}
    </View>
  );
}

export default RatingItem;
