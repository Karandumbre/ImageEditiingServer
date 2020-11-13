import * as React from "react";
import { View } from "../components/Themed";
import { styles } from "../styles/container-style-sheet";
import Home from "../components/home-screen-layout";
import { TabThree } from "./../utils/photos";

export default function TabThreeScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={TabThree} {...props} />
    </View>
  );
}
