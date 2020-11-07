import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Container, Content, Thumbnail } from "native-base";

class FilterScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Filters</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5,
                }}
              >
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/1.jpg")}
                />
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/2.jpg")}
                />
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/3.jpg")}
                />
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/4.jpg")}
                />

                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/5.jpg")}
                />
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/6.jpg")}
                />
                <Thumbnail
                  style={styles.thumbnailStyle}
                  source={require("../../assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  thumbnailStyle: {
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
