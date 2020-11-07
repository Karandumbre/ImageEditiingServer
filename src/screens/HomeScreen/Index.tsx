import React, { Component } from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";

import { processImages, buildRows, normalizeRows } from "../../utils/utils";
import PhotoGallery from "./PhotoGallery";
import GridItem from "./GridItem";

const maxWidth = Dimensions.get("window").width;

type Props = {
  photos: any;
};

class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
    const rows = normalizeRows(
      buildRows(processImages(this.props.photos), maxWidth),
      maxWidth
    );
    this.state = {
      dataSource: rows,
    };
  }

  renderRow = ({ item, onPhotoOpen }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginBottom: 5,
          justifyContent: "space-between",
        }}
      >
        {item.map((i: { id: string | number | null | undefined }) => (
          <GridItem
            item={i}
            key={i.id}
            onPhotoOpen={onPhotoOpen}
            {...this.props}
          />
        ))}
      </View>
    );
  };

  render() {
    return (
      <PhotoGallery
        renderContent={({ onPhotoOpen }) => (
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item, index }) =>
              this.renderRow({ item, index, onPhotoOpen })
            }
            keyExtractor={(_, key) => `${key}`}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
