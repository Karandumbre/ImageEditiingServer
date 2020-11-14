import styled from "styled-components";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const TextWrapper = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
export const TouchableOpacityWrapper = styled(TouchableOpacity)`
  border-radius: 100px;
  width: 50px;
  z-index: 1;
`;

export const IonIconsWrapper = styled(Ionicons)`
  margin-left: 12px;
`;
