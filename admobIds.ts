// Android Banner : ca-app-pub-3940256099942544/6300978111

import { Platform } from "react-native";
// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
//   setTestDeviceIDAsync,
// } from "expo-ads-admob";
// Android Interstitial : ca-app-pub-3940256099942544/1033173712

// Ios Banner: ca-app-pub-3940256099942544/2934735716
// Ios Interstitial: ca-app-pub-3940256099942544/4411468910

export const bannerId = Platform.OS === "ios" ? "" : "";

export const interstitialId = Platform.OS === "ios" ? "" : "";

export const interstitialVideoId =
  Platform.OS === "ios" ? "" : "ca-app-pub-3945058741555501/5863314588";

export const rewardedVideoAddId = Platform.OS === "ios" ? "" : "";
