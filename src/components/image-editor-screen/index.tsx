import React from "react";
import { View, Image, Dimensions, Text, ImageBackground } from "react-native";
import Gallery from "../gallery-image-picker";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import Loader from "../loader/loader";
import {
  FileDownloadIconWrapper,
  TouchableOpacityWrapper,
  ViewContainer,
  FlashMessageViewWrapper,
} from "./image-editor-screen.styled";
import Contants from "expo-constants";

const maxWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type Props = {
  route: any;
};

type State = {
  source: any;
  isDownload: boolean;
  base64: string;
  flashMessage: boolean;
  isLoading: boolean;
};

class ImageEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      source: props.route.params.source,
      isDownload: false,
      base64: "",
      flashMessage: false,
      isLoading: false,
    };
  }

  showInitialImage = () => {
    this.setState({ source: this.props.route.params.source });
  };

  showMessage(transition = 3000) {
    this.setState({ flashMessage: true }, () => {
      setTimeout(() => this.closeFlashMessage(), transition);
    });
  }

  closeFlashMessage() {
    this.setState({ flashMessage: false });
  }

  flashMessageWrapper = (message) => (
    <FlashMessageViewWrapper>
      <Image
        source={require("./../../../assets/Icon/icons/fm_icon_success.png")}
        style={{ marginRight: 10 }}
      />
      <Text style={{ color: "white", fontSize: 16 }}>{message}</Text>
    </FlashMessageViewWrapper>
  );

  startLoading = () => {
    this.setState({ isLoading: true });
  };

  stopLoading = () => {
    this.setState({ isLoading: false });
  };

  selectPicture = (event: any) => {
    if (event) {
      const photo = {
        ...this.state.source,
      };
      photo.uri = `data:image/png;base64,${event}`;
      this.setState({
        source: photo,
        isDownload: true,
        base64: event,
      });
    }
  };

  todo = async (event: string) => {
    const filename = `${FileSystem.documentDirectory}/PERSONA_${Math.floor(
      Date.now() / 1000
    )}.png`;

    await FileSystem.writeAsStringAsync(filename, event, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const mediaResult = await MediaLibrary.saveToLibraryAsync(filename);
    this.showMessage(1000);
  };

  render() {
    return (
      <View>
        {this.state.isLoading && <Loader />}

        <Image
          source={this.state.source}
          style={{
            width: maxWidth,
            height: height,
            resizeMode: "contain",
            position: "absolute",
            top: Contants.statusBarHeight,
          }}
        />

        {this.state.flashMessage === true
          ? this.flashMessageWrapper("File Downloaded Successfully")
          : null}

        <ViewContainer isDownload={this.state.isDownload}>
          <Gallery
            selectPicture={this.selectPicture}
            showInitialImage={this.showInitialImage}
            filter={this.props.route.params.filter}
            startLoading={this.startLoading}
            stopLoading={this.stopLoading}
          ></Gallery>

          {this.state.isDownload && (
            <View>
              <TouchableOpacityWrapper
                onPress={() => this.todo(this.state.base64)}
              >
                <ImageBackground
                  source={require("./../../../assets/download.jpeg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                    overflow: "hidden",
                  }}
                >
                  <FileDownloadIconWrapper
                    name="md-download"
                    size={40}
                    color="white"
                  />
                </ImageBackground>
              </TouchableOpacityWrapper>
            </View>
          )}
        </ViewContainer>
      </View>
    );
  }
}

export default ImageEditor;
