import { StyleSheet } from "react-native";
import {  Dimensions } from "react-native";
const s = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 0,
        // backgroundColor: '#1ACDA5',
      },
      retryTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "blue",
      },
      footerView:{
        backgroundColor:"transparent",
        height: 34,
        width:Dimensions.get('window').width-20,
      },
});

export { s };
