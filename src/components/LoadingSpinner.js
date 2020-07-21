import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

const LoadingSpinner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      }}
    >
      <ActivityIndicator animating />
    </View>
  );
};

export default LoadingSpinner;
