import * as React from "react";
import { styles } from "../styles/container-style-sheet";
import { View } from "../components/Themed";
import Home from "../components/home-screen-layout";
import { Advance } from "./../utils/photos";
export default function TabOneScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={Advance} {...props} />
    </View>
  );
}
