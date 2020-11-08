import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import store from "./src/ReduxAsync/store";
import { Provider } from "react-redux";
import * as Network from 'expo-network';
import NoConnection from './src/components/no-connection';

const checkNetwork = async () => {
  let isConnectedToNetwork = false;
  let data = await Network.getNetworkStateAsync()
  if (data.isConnected && data.isInternetReachable) {
    isConnectedToNetwork = true;
  }
  return isConnectedToNetwork;
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [connectedToNetwork, setConnectedToNetwork] = useState(false);
  useEffect(() => {
    checkNetwork().then(res => {
      if (res) {
        setConnectedToNetwork(res);
      }
    });
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else if (connectedToNetwork) {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </Provider>
    );
  } else {
    return <NoConnection />;
  }
}
