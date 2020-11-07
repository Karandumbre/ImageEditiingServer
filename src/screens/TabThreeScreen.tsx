import * as React from "react";
import { View } from "../components/Themed";
import { styles } from "./ContainerStyleSheet";
import Home from "./HomeScreen/Index";
import { TabThree } from "./../utils/photos";

export default function TabThreeScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={TabThree} {...props} />
    </View>
  );
}
