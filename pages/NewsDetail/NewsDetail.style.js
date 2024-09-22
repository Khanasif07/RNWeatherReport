import { StyleSheet } from "react-native";
import {  Dimensions } from "react-native";
const s = StyleSheet.create({
    leftAligned: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        // backgroundColor: "white",
      },
      container: {
        flex: 1,
        padding: 0,
        justifyContent: 'top',
        alignItems: 'flex-start',
        // backgroundColor: '#1ACDA5',
      },
      image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 350,
        backgroundColor: "white",
        marginBottom: 15,
        // resizeMode: 'fill',
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
      tagText: {
        textAlign: "center", 
        fontSize: 12.5,
        flexShrink: 1, 
        color: "white",
        fontWeight: 'bold',
        // maxWidth: 185,   
      },
      content:{
        textAlign: "left", 
        fontSize: 12.5,
        flexShrink: 1, 
        color: "white",
        fontWeight: 'medium',
      },
      title:{
        textAlign: "left", 
        fontSize: 13.5,
        flexShrink: 1, 
        color: "white",
        fontWeight: 'bold',
      },
      time:{
        textAlign: "left", 
        fontSize: 12.5,
        flexShrink: 1, 
        color: "yellow",
        fontWeight: 'medium',
      },
      footerView:{
        backgroundColor:"transparent",
        height: 34,
        width:Dimensions.get('window').width-20,
      },
});

export { s };
