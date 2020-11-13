import React from "react";
import { View, TouchableWithoutFeedback, Dimensions } from "react-native";
import PhotoGallery from "./PhotoGallery";

var { width, height } = Dimensions.get("window");

type Props = {
  navigation: {
    navigate: (...args: any[]) => any;
  };
  item: object;
};

const Item = (props: Props) => {
  const modifiedWidth = width / 2;
  const modifiedHeight = height / 4;

  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("Persona", { ...props.item })}
    >
      <View>
        <PhotoGallery.Photo
          photo={props.item}
          style={{
            width: modifiedWidth,
            height: modifiedHeight,
            marginRight: 5,
            resizeMode: "cover",
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
