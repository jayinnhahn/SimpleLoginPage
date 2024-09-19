import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { InputComponent, OutputComponent, V } from "../../components/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const OutputScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <InputComponent value={value} setValue={setValue} />
        <OutputComponent value={value} />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
