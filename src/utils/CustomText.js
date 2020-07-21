import React from "react";
import { Text } from "react-native";

export function CustomText(props) {
  return (
    <Text style={{ fontFamily: "openSans" }} {...props}>
      {props.children}
    </Text>
  );
}

export function CustomTextBold(props) {
  return (
    <Text style={{ fontFamily: "openSansBold" }} {...props}>
      {props.children}
    </Text>
  );
}
