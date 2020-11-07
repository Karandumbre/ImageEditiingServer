import * as React from "react";
import { styles } from "./ContainerStyleSheet";
import { View } from "../components/Themed";
import Home from "./HomeScreen/Index";
import { Advance } from "./../utils/photos";
export default function TabOneScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={Advance} {...props} />
    </View>
  );
}
