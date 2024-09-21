import { StyleSheet } from "react-native";

const newsStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    backgroundColor: "white",
    borderRadius: 7.5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    leftAligned: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      // backgroundColor: "white",
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    height: 150,
    // felx: 1,
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 130,
    backgroundColor: "white",
    borderRadius: 7.5,
  },
  textStackColumn: {
    marginLeft: 15,
    marginRight:10,
    paddingVertical: 5,
    flex: 1,
    // flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: 'space-between', 
    width: "100%",
    // backgroundColor: "yellow",
    // height: 130,
  },
  textStackRow: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "left", 
    fontSize: 12.5,
    flexShrink: 1,
    marginBottom: 5,
    // width: '100%',
    // lineHeight: 24,   
  },
  tagText: {
    textAlign: "center", 
    fontSize: 12.5,
    flexShrink: 1, 
    color: "white",
    fontWeight: 'bold',
    // maxWidth: 185,   
  },
  timeText: {
    textAlign: "left", 
    fontSize: 11.5,
    color: "green",
  },
  contentText: {
    textAlign: "left", 
    fontSize: 12.5,
    flexShrink: 1,
    color: "grey",
  },
  dynamicView: {
    // padding: 10,
    paddingHorizontal: 10,
    marginBottom: 5,  
    paddingVertical: 3.5,
    alignItems: "center",
    margin: 0,
    height: 25,
    backgroundColor: "green",
    borderRadius: 20,
    minWidth: 50,      // Ensure a minimum width, adjust as needed
    maxWidth: '90%',    // Set a max width to keep it from expanding too much
  },
});

export { newsStyle };
