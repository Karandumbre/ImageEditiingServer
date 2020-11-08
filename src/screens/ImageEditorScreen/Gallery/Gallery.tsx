import * as React from "react";
import { View, Platform } from "react-native";
import * as Permissions from "expo-permissions";
import { takeAndUploadPhotoAsync } from "../../../utils/http.service";
import { TouchableOpacityWrapper, IonIconsWrapper } from "./Gallery.styled";
import { connect } from "react-redux";
import { LoadingStarted, LoadingStopped } from "../../../ReduxAsync/actions";

class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacityWrapper onPress={this._pickImage}>
          <IonIconsWrapper name="ios-add" size={50} color="white" />
        </TouchableOpacityWrapper>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    this.props.showInitialImage();
    try {
      this.props.loadingStart();
      const got = await takeAndUploadPhotoAsync(this.props.filter);
      this.props.selectPicture(got?.data.imageData);
      this.props.loadingStop();
    } catch (E) {
      this.props.loadingStop();
    }
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadingStart: () => dispatch(LoadingStarted()),
    loadingStop: () => dispatch(LoadingStopped()),
  };
};

export default connect(null, mapDispatchToProps)(ImagePickerExample);
