import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const OutputComponent = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text>{value} </Text>
    </View>
  );
};
