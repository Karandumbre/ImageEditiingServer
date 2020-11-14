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

export const bannerId =
  Platform.OS === "ios"
    ? "ca-app-pub-3940256099942544/2934735716"
    : "ca-app-pub-3940256099942544/6300978111";

export const interstitialId =
  Platform.OS === "ios"
    ? "ca-app-pub-3940256099942544/4411468910"
    : "ca-app-pub-3940256099942544/1033173712";

export const interstitialVideoId =
  Platform.OS === "ios"
    ? "ca-app-pub-3940256099942544/4411468910"
    : "ca-app-pub-3940256099942544/8691691433";

export const rewardedVideoAddId =
  Platform.OS === "ios" ? "" : "ca-app-pub-3940256099942544/5224354917";
