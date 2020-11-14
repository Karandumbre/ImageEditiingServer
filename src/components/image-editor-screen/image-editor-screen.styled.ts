import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components";
import { TouchableOpacity, View, Dimensions } from "react-native";
import Contants from "expo-constants";

import Layout from "../../constants/Layout";
const width = Layout.window.width;
const height = Layout.window.height;

export const FileDownloadIconWrapper = styled(Ionicons)`
  margin-left: 12px;
  margin-top: 4px;
`;

export const TouchableOpacityWrapper = styled(TouchableOpacity)`
  background: #48494b;
  border-radius: 100px;
  width: 50px;
  height: 50px
  z-index: 1;
`;

export const ViewContainer = styled(View)`
  flex-direction: row;
  ${(props) =>
    props.isDownload
      ? "justify-content: space-evenly"
      : css`
          align-items: center;
          align-self: center;
        `}

  top: ${height - 60}px;
`;

export const FlashMessageViewWrapper = styled(View)`
  ${(props) => {
    switch (props.type) {
      case "SUCCESS":
        return css`
          background-color: #22bb33;
        `;
      case "WARNING":
        return css`
          background-color: #f0ad4e;
        `;
      case "DANGER":
        return css`
          background-color: #bb2124;
        `;
      case "INFO":
        return css`
          background-color: #5bc0de;
        `;
      default:
        return css`
          background-color: #22bb33;
        `;
    }
  }}
  position: absolute;
  border-radius: 10px;
  width: ${width - 100}px;
  justify-content: center;
  align-items: center;
  height: 50px;
  align-self: center;
  display: flex;
  flex-direction: row;
  top: ${Contants.statusBarHeight + 50}px;
`;
