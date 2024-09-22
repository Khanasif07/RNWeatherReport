import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    // height: 44,
    paddingLeft: 20,
    borderRadius: 20,
    fontFamily: "Alata-Regular",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
  },
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    position: 'relative', // Allows absolute positioning inside the container
    justifyContent: 'center',
    height: 44,
    // borderWidth: 0,
    // borderColor: '#ccc',
    // borderRadius: 5,
    // paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  clearButton: {
    padding: 7.5,
    position: 'absolute',
    right: 10,          // Position the button on the right inside the container
    justifyContent: 'center',
    height: '100%',     
  },
  clearButtonText: {
    fontSize: 20,
    color: 'black',
  },
});

export { s };
