import React from "react";
import {
  Button,
  Text,
  View,
  Pressable,
  Modal,
  Toast,
  SafeAreaView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { InputComponent } from "../../components";
import axios from "axios";
// import { Axios } from "react-native-axios";
import { LoginAxios } from "../../api/userapi";
import { backendUrl } from "../../utils/constant";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = async () => {
    await axios
      .post(`${backendUrl}/authentication/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.httpStatus === "OK") {
          navigation.navigate("Dashboard", response.data.object);
          console.log(response.data.httpStatus);
          console.log(response.data.object);
          console.log(backendUrl);
        } else {
          Alert.alert("Login Failed", response.data.httpStatus);
          console.log(response.data);
          console.log(response.data.httpStatus);
          console.log(`${backendUrl}/authentication/login`);
        }
      })
      .catch(function (error) {
        console.log(backendUrl);
        console.log(email, password);
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BOUNTIPLY</Text>
      <View style={styles.inputView}>
        <InputComponent value={email} setValue={setEmail} />
        <InputComponent value={password} setValue={setPassword} />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}></View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => LoginHandler()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
