import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "column",
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    fontSize: "10rem",
    padding: "20px",
  },
  box: {
    width: "20%",
    height: "30%",
    backgroundColor: "blue",
    color: "white",
    borderWidth: 2,
    borderColor: "red",
  },
  boxText: {
    color: "white",
    fontSize: "50px",
    textAlign: "center",
  },
  boxContainer: {
    display: "flex",
    gap: "5px",
    height: "40%",
    width: "100%",
    flexDirection: "row",
  },
  text: {
    color: "black",
  },
  ButtonContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
});
