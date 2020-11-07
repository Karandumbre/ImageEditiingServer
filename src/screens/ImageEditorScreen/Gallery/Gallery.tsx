import * as React from "react";
import { View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { handleUploadImage } from "../../../utils/http.service";
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
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        this.props.loadingStart();
        result.filter = this.props.filter;

        handleUploadImage(result)
          .then((res) => {
            this.props.selectPicture(res.data.status);
            this.props.loadingStop();
          })
          .catch((error) => {
            this.props.loadingStop();
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
            throw error;
          });
      }
    } catch (E) {
      this.props.loadingStop();
      console.log(E);
    }
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImage: (result: any) => dispatch(fetchImage(result)),
    loadingStart: () => dispatch(LoadingStarted()),
    loadingStop: () => dispatch(LoadingStopped()),
  };
};

export default connect(null, mapDispatchToProps)(ImagePickerExample);
