import React, { Component } from "react";

import { View, Image } from "react-native";

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("./../../assets/Icon/persona.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}
