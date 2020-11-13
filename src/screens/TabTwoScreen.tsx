import * as React from "react";
import { View } from "react-native";
import Home from "../components/home-screen-layout";
import { Basic } from "./../utils/photos";
import { styles } from "../styles/container-style-sheet";

export default function TabTwoScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={Basic} {...props} />
    </View>
  );
}
