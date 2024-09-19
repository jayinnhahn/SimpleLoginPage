import { StatusBar } from "expo-status-bar";
import { Button, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import React from "react";

export const Home = ({ navigation }) => {
  const [style, setStyle] = useState("flex-start");
  const numbers = [1, 2, 3];

  const changeJustify = (e) => {
    console.log(style);
    setStyle(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View
          style={[
            { ...styles.boxContainer },
            {
              justifyContent: `${style}`,
            },
          ]}
        >
          {numbers.map((item, index) => (
            <View style={styles.box} key={index}>
              <Text style={styles.boxText}>{index + 1}</Text>
            </View>
          ))}
        </View>
        <View style={styles.ButtonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => changeJustify("space-between")}
          >
            <Text style={styles.buttonText}>space-between</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => changeJustify("space-evenly")}
          >
            <Text style={styles.buttonText}>space-evenly</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => changeJustify("flex-end")}
          >
            <Text style={styles.buttonText}>flex-end</Text>
          </Pressable>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
