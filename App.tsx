import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import * as Network from "expo-network";
import NoConnection from "./src/components/no-connection";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";

const checkNetwork = async () => {
  let isConnectedToNetwork = false;
  let data = await Network.getNetworkStateAsync();
  if (data.isConnected && data.isInternetReachable) {
    isConnectedToNetwork = true;
  }
  return isConnectedToNetwork;
};

export default function App() {
  const colorScheme = useColorScheme();
  const [connectedToNetwork, setConnectedToNetwork] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    checkNetwork().then((res) => {
      if (res) {
        setConnectedToNetwork(res);
      }
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    checkNetwork().then((res) => {
      if (res) {
        setConnectedToNetwork(res);
      }
    });
  }, []);

  if (connectedToNetwork) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <NoConnection />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
