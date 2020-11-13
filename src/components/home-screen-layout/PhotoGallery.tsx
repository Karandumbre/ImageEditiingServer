import React from "react";
import { View, Animated } from "react-native";
import PropTypes from "prop-types";
import Constants from "expo-constants";

class PhotoGalleryPhoto extends React.Component<Props, State> {
  state = {
    opacity: 1,
  };

  static contextTypes = {
    onImageRef: PropTypes.func,
  };

  setOpacity = (opacity: any) => {
    this.setState({ opacity });
  };

  render() {
    const { style, photo } = this.props;
    const { opacity } = this.state;
    return (
      <Animated.Image
        ref={(i) => {
          this.context.onImageRef(photo, i, this.setOpacity);
        }}
        style={[
          style,
          {
            opacity,
          },
        ]}
        source={photo.source}
      />
    );
  }
}

export default class PhotoGallery extends React.Component {
  static Photo = PhotoGalleryPhoto;

  state = {
    photo: null,
    openProgress: new Animated.Value(0),
    isAnimating: false,
  };

  _images = {};

  _imageOpacitySetters = {};

  static childContextTypes = {
    onImageRef: PropTypes.func,
  };

  getChildContext() {
    return { onImageRef: this._onImageRef };
  }

  _onImageRef = (
    photo: { id: React.ReactText },
    imageRef: any,
    setOpacity: any
  ) => {
    this._images[photo.id] = imageRef;
    this._imageOpacitySetters[photo.id] = setOpacity;
  };

  open = (photo: { id: React.ReactText }) => {
    this._imageOpacitySetters[photo.id](
      this.state.openProgress.interpolate({
        inputRange: [0.005, 0.01],
        outputRange: [1, 0],
      })
    );
    this.setState({ photo, isAnimating: true }, () => {
      Animated.timing(this.state.openProgress, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        this.setState({ isAnimating: false });
      });
    });
  };

  // close = (photoId: React.ReactText) => {
  //   this.setState({ photo: null, isAnimating: true }, () => {
  //     Animated.timing(this.state.openProgress, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       this._imageOpacitySetters[photoId](1);
  //       this.setState({ isAnimating: false });
  //     });
  //   });
  // };

  render() {
    return (
      <View
        style={{
          flex: 0,
          marginTop: Constants.statusBarHeight,
        }}
      >
        {this.props.renderContent({ onPhotoOpen: this.open })}
      </View>
    );
  }
}
