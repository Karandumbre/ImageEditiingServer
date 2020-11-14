import * as React from "react";
import { View, Platform, ImageBackground } from "react-native";
import * as Permissions from "expo-permissions";
import {
  TouchableOpacityWrapper,
  IonIconsWrapper,
} from "./gallery-image-picker.styled";
import axios from "axios";
import { BASE_URL } from "./../../constants/url";
import * as ImagePicker from "expo-image-picker";

type Props = {
  filter: boolean;
  showInitialImage: Function;
  startLoading: Function;
  selectPicture: Function;
  stopLoading: Function;
};

class ImagePickerExample extends React.Component<Props> {
  state = {
    image: null,
  };
  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  abortController = new AbortController();

  fetchImage = async () => {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (result.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    const localUri = result.uri;
    const filename = localUri.split("/").pop();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();

    // Assume "photo" is the name of the form field the server expects
    formData.append("photo", { uri: localUri, name: filename, type });

    const headers = {
      "content-type": "multipart/form-data",
    };

    try {
      this.props.startLoading();
      const result = await axios.post(
        `${BASE_URL}/upload/${this.props.filter}`,
        formData,
        {
          headers: headers,
          cancelToken: this.source.token,
        }
      );
      return result.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        throw new Error("Cancelled");
      }
    }
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
          <ImageBackground
            source={require("./../../../assets/plus.jpeg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <IonIconsWrapper name="ios-add" size={50} color="white" />
          </ImageBackground>
        </TouchableOpacityWrapper>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  componentWillUnmount() {
    this.source.cancel("Operation canceled by the user.");
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
      const data = await this.fetchImage();
      this.props.selectPicture(data.imageData);
      this.props.stopLoading();
    } catch (E) {
      this.props.stopLoading();
    }
  };
}

export default ImagePickerExample;
