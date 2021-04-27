import React from "react";
import { View } from "react-native";

const menuItem = [
  {
    id: 1,
    menuIcon: require("../../../assets/image/home/price/ic_price.png"),
    menuText: "가격표",
  },
  {
    id: 2,
    menuIcon: require("../../../assets/image/home/guide/ic_guide.png"),
    menuText: "이용방법",
  },
  {
    id: 3,
    menuIcon: require("../../../assets/image/home/event/ic_event.png"),
    menuText: "이벤트",
  },
  {
    id: 4,
    menuIcon: require("../../../assets/image/home/factory/ic_factory.png"),
    menuText: "세탁과정",
  },
];

const serviceItem = [
  {
    id: 1,
    menuIcon: require("../../../assets/image/home/care/ic_care.png"),
    menuText: "추가케어",
  },
  {
    id: 2,
    menuIcon: require("../../../assets/image/home/premium/ic_premium.png"),
    menuText: "프리미엄",
  },
  {
    id: 3,
    menuIcon: require("../../../assets/image/home/repair/ic_repair.png"),
    menuText: "수선",
  },
  {
    id: 4,
    menuIcon: require("../../../assets/image/home/natural/ic_natural.png"),
    menuText: "천연세제",
  },
  {
    id: 5,
    menuIcon: require("../../../assets/image/home/shoes/ic_shoes.png"),
    menuText: "구둣방",
  },
  {
    id: 6,
    menuIcon: require("../../../assets/image/home/freepass/ic_freepass.png"),
    menuText: "프리패스",
  },
];

const reviewData = [
  {
    id: 1,
    user: "통장에서텅장으로님",
    use_count: 1,
    date: "오늘",
    description:
      "일반 동네세탁소보다 퀄리티가 상당합니다. 제가 이번에 처음으로 주문을 했지만 솔직히 반신반의한 마음으로 맡겼지만 세탁물을 받아보고 블라블라블라 블라블라블라 블라블라블라",
    rate: [
      { type: "수거", scope: "2" },
      { type: "배송", scope: "1" },
      { type: "세탁", scope: "4" },
    ],
    // rate: {
    //   scope1: "2",
    //   scope2: "1",
    //   scope3: "4",
    // },
  },
  {
    id: 2,
    user: "오오오옹",
    use_count: 4,
    date: "어제",
    description: "블라블라 블라블라블라 블라블라블라",
    rate: [
      { type: "수거", scope: "1" },
      { type: "배송", scope: "3" },
      { type: "세탁", scope: "5" },
    ],
    // rate: {
    //   scope1: "1",
    //   scope2: "3",
    //   scope3: "5",
    // },
  },
  {
    id: 3,
    user: "이이이이이이잉",
    use_count: 67,
    date: "3일 전",
    description:
      "일반 동네세탁소보다 퀄리티가 상당합니다.일반 동네세탁소보다 퀄리티가 상당합니다. ",
    rate: [
      { type: "수거", scope: "5" },
      { type: "배송", scope: "2" },
      { type: "세탁", scope: "3" },
    ],
    // rate: {
    //   scope1: "5",
    //   scope2: "2",
    //   scope3: "3",
    // },
  },
];

const ratingStarImg = [
  {
    scope: "1",
    src: require("../../../assets/image/home/review/star1/Star.png"),
  },
  {
    scope: "2",
    src: require("../../../assets/image/home/review/star2/Star.png"),
  },
  {
    scope: "3",
    src: require("../../../assets/image/home/review/star3/Star.png"),
  },
  {
    scope: "4",
    src: require("../../../assets/image/home/review/star4/Star.png"),
  },
  {
    scope: "5",
    src: require("../../../assets/image/home/review/star5/Star.png"),
  },
];

export { menuItem, serviceItem, reviewData, ratingStarImg };
