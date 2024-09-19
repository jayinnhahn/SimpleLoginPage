import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    fontSize: "10rem",
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "white",
    borderWidth: 2,
    borderColor: "red",
  },
  boxText: {
    color: "white",
    fontSize: "20rem",
    textAlign: "center",
  },
  boxContainer: {
    display: "flex",
    marginVertical: 24,
    gap: "5px",
    flexDirection: "row",
  },
  text: {
    color: "black",
  },
  button: {
    backgroundColor: "red",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  ButtonContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
});
