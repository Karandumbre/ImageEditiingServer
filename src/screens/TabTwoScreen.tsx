import * as React from "react";
import { View } from "react-native";
import Home from "./HomeScreen/Index";
import { Basic } from "./../utils/photos";
import { styles } from "./ContainerStyleSheet";

export default function TabTwoScreen(props: any) {
  return (
    <View style={styles.container}>
      <Home photos={Basic} {...props} />
    </View>
  );
}
