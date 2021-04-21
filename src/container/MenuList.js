import React from "react";
import { View } from "react-native";
import MenuItem from "../components/menuItems/menuItem";
import style from "../components/style/style";

function MenuList(props) {
  const { list } = props;
  return (
    <View style={style.mainMenuList}>
      {list.map((item) => {
        return <MenuItem list={item} key={item.id} />;
      })}
    </View>
  );
}

export default MenuList;
