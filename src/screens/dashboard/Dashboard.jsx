import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  Pressable,
  Modal,
  Toast,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { InputComponent } from "../../components";
import axios from "axios";
import { backendUrl } from "../../utils/constant";
export const Dashboard = ({ navigation, route }) => {
  const { id, firstName, lastName, token, email } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState("");

  const AuthToken = `Bearer ${token}`;

  const submit = async () => {
    await axios
      .put(
        `${backendUrl}/user/updateUserDetails/${id}`,
        {
          id: id,
          firstName: inputFirstName,
          lastName: inputLastName,
          email: inputEmail,
        },
        { headers: { Authorization: AuthToken } }
      )
      .then(function (response) {
        if (response.data.httpStatus === "OK") {
          console.log(response.data.httpStatus);
        } else {
          Alert.alert("Login Failed", response.data.httpStatus);
          console.log(response.data.httpStatus);
        }
      })
      .catch(function (error) {
        console.log(id, inputFirstName, inputLastName, email);
        console.log(AuthToken);
        console.log(`${backendUrl}/user/updateUserDetails/${id}`);
        console.log(error);
        console.log(response.data.httpStatus);
        navigation.navigate("Login");
      });
    setModalVisible(!modalVisible);
  };

  const register = async () => {
    await axios
      .post(
        `${backendUrl}/user/registration`,
        {
          userDto: {
            firstName: inputFirstName,
            lastName: inputLastName,
            email: inputEmail,
            password: inputPassword,
          },
          roleDto: {},
        },
        { headers: { Authorization: AuthToken } }
      )
      .then(function (response) {
        if (response.data.httpStatus === "CREATED") {
          console.log(response.data.httpStatus);
          console.log(response.data.object);
          console.log(inputPassword, inputFirstName, inputLastName, inputEmail);
        } else {
          Alert.alert("Registration Failed", response.data.httpStatus);
          console.log(response.data.httpStatus);
        }
      })
      .catch(function (error) {
        console.log(inputPassword, inputFirstName, inputLastName, inputEmail);
        console.log(`${backendUrl}/user/registration`);
        console.log(AuthToken);
        console.log(error);
        console.log(response.data.httpStatus);
        navigation.navigate("Login");
      });
    setRegisterModalVisible(!registerModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Update Details</Text>

            <Text style={styles.modalText}>Edit Firstname</Text>
            <InputComponent
              value={inputFirstName}
              setValue={setInputFirstName}
            />

            <Text style={styles.modalText}>Edit LastName</Text>
            <InputComponent value={inputLastName} setValue={setInputLastName} />

            <Text style={styles.modalText}>Edit Email</Text>
            <InputComponent value={inputEmail} setValue={setInputEmail} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => submit()}
            >
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={registerModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setRegisterModalVisible(!registerModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Register User</Text>

            <Text style={styles.modalText}>Input Firstname</Text>
            <InputComponent
              value={inputFirstName}
              setValue={setInputFirstName}
            />

            <Text style={styles.modalText}>Input LastName</Text>
            <InputComponent value={inputLastName} setValue={setInputLastName} />

            <Text style={styles.modalText}>Input Email</Text>
            <InputComponent value={inputEmail} setValue={setInputEmail} />

            <Text style={styles.modalText}>Input Password</Text>
            <InputComponent value={inputPassword} setValue={setInputPassword} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => register()}
            >
              <Text style={styles.textStyle}>Register</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.inputView}>
        <Text style={styles.title}>PROFILE</Text>

        <Image
          style={styles.image}
          source={require("../../../resources/facebookPic.jpg")}
        />

        <View style={styles.ViewName}>
          <Text style={styles.DisplayName}>
            {inputFirstName} {inputLastName}
          </Text>
        </View>

        <View style={styles.ViewLayout}>
          <View>
            <Text style={styles.Number}>83</Text>
            <Text style={styles.Follow}>Following</Text>
          </View>
          <View>
            <Text style={styles.Number}>5003</Text>

            <Text style={styles.Follow}>Followers</Text>
          </View>
        </View>

        <View style={styles.ViewLayout}>
          <Button
            title="Edit Details"
            color="black"
            onPress={() => setModalVisible(true)}
          />
          <Button
            title="Register User"
            color="black"
            onPress={() => setRegisterModalVisible(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
