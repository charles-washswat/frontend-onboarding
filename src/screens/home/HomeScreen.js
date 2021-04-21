import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import TopInfoArea from "../../container/TopInfoArea";
import MenuList from "../../container/MenuList";
import ServiceList from "../../container/ServiceList";
import ReviewList from "../../container/ReviewList";
import style from "../../components/style/style";

const menuItem = [
  {
    id: 1,
    menuIcon: require("../../../assets/image/home/price/ic_price.png"),
    menuText: "가격표",
    type: "menu",
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

const reviewData = {
  id: 1,
  title: "통장에서텅장으로님",
  count: 1,
  day: "오늘",
  collection: "수거",
  delivery: "배송",
  laundry: "세탁",
  collectionStar: require("../../../assets/image/home/review/star5/Star.png"),
  deliveryStar: require("../../../assets/image/home/review/star3/Star.png"),
  laundryStar: require("../../../assets/image/home/review/star4/Star.png"),
  description:
    "일반 동네세탁소보다 퀄리티가 상당합니다. 제가 이번에 처음으로 주문을 했지만 솔직히 반신반의한 마음으로 맡겼지만 세탁물을 받아보고 블라블라블라 블라블라블라 블라블라블라",
};

function HomeScreen(props) {
  const { componentId } = props;
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.wrapper}>
        <TopInfoArea />
        <MenuList list={menuItem} />
        <ServiceList list={serviceItem} />
        <ReviewList data={reviewData} />
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
