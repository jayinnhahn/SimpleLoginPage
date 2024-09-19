import React, { useState } from "react";
import { TextInput, SafeAreaView } from "react-native";
import { styles } from "./styles";

export const InputComponent = ({ ...props }) => {
  const { value, setValue } = props;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Input Value Here"
      />
    </SafeAreaView>
  );
};
