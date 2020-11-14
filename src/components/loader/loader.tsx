import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import Layout from "./../../constants/Layout";
const width = Layout.window.width;
const height = Layout.window.height;
import { AdMobInterstitial } from "expo-ads-admob";
import { interstitialVideoId } from "./../../../admobIds";
class Loader extends Component {
  async componentDidMount() {
    try {
      await AdMobInterstitial.setAdUnitID(interstitialVideoId); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.containerAnother, styles.horizontal]}>
          <Image
            style={{
              width: width,
              height: height,
              resizeMode: "contain",
            }}
            source={require("./../../../assets/personasmall.gif")}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    zIndex: 22,
    position: "relative",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  containerAnother: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "column",
  },
});

export default Loader;
