import React from "react";
import { View, Text } from "react-native";
import MenuItem from "../components/menuItems/menuItem";
import styles from "../components/style/style";

function ServiceList(props) {
  const { list } = props;
  return (
    <>
      {/* <Text style={style.subTitle}>이런 서비스는 어때요?</Text> */}
      <View style={styles.serviceList}>
        {list.map((item) => {
          return <MenuItem list={item} key={item.id} />;
        })}
      </View>
    </>
  );
}

export default ServiceList;
