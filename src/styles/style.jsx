import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop:  65,
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: "#dacc6fff",
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "#b2b2b2ff",
    height: 70,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 15,
    borderColor: "black",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center",
    marginBottom: 16,
    flexDirection: 'column',
  },
  label: {
    color: "#000000ff",
    fontSize: 14,
    textAlign: "right",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  numberText: {
    alignSelf: "flex-end",
    fontSize: 22,
    fontWeight: "900"
  }
});