import React, { Component } from "react";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import Layout from "./../../constants/Layout";
const width = Layout.window.width;
const height = Layout.window.height;
const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerAnother, styles.horizontal]}>
        <Image
          style={{
            width: width,
            height: height,
            resizeMode: "contain",
          }}
          // source={require("./../../../assets/Persona.png")}
          source={require("./../../../assets/personasmall.gif")}
        />
        {/* <ActivityIndicator
          size="large"
          color="red"
          style={{
            position: "absolute",
            right: width / 2,
            top: height / 2 + 90,
          }}
        /> */}
      </View>
    </View>
  );
};

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
