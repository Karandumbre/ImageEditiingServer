import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components";
import { TouchableOpacity, View, Dimensions, Text } from "react-native";
import Contants from "expo-constants";

export const PrivacyPolicyMainContainerView = styled(View)`
  margin-top: ${Contants.statusBarHeight + 70}px;
`;
export const PrivacyPolicyContainer = styled(View)`
  padding: 10px 15px;
`;

export const PrivacyPolicyHeadingStyled = styled(Text)`
  font-weight: bold;
  font-size: 22px;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const PrivacyPolicyTopHeadingStyled = styled(Text)`
  font-weight: bold;
  font-size: 22px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

export const PrivacyPolicyParagraphStyled = styled(Text)`
  font-size: 16px;
  color: white;
  text-align: justify;
  margin-bottom: 10px;
`;

export const PrivacyPolicyParagraphListStyled = styled(Text)`
  font-size: 16px;
  color: white;
  text-align: justify;
  margin-bottom: 10px;
  margin-left: 20px;
`;
