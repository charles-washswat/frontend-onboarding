import React from "react";
import { View } from "react-native";
import MenuItem from "../components/menuItems/menuItem";
import styles from "../components/style/item";

function MenuList(props) {
  const { dataList } = props;
  return (
    <View style={styles.mainMenuList}>
      {dataList.map((item) => {
        return <MenuItem list={item} key={item.id} />;
      })}
    </View>
  );
}

export default MenuList;
