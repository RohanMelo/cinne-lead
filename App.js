import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

import BottomTabs from "./src/navigation/BottomTabs";
import { store } from "./src/redux/store";
import LoadingSpinner from './src/components/LoadingSpinner';

export default function App() {
  const [loaded] = useFonts({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf")
  });

  if (!loaded) {
    return <LoadingSpinner />;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
