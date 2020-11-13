import React, { Component } from "react";

import { View, Image } from "react-native";

import Layout from "./../constants/Layout";
const width = Layout.window.width;
const height = Layout.window.height;

export default class NoConnection extends Component {
  render() {
    return (
      <View>
        <Image
          source={require("./../../assets/no-connection.png")}
          style={{
            width: width,
            height: height - 100,
            borderRadius: 40 / 2,
          }}
        />
      </View>
    );
  }
}
