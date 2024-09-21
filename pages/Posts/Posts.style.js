import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#1ACDA5',
    },
    post: {
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      paddingVertical: 20,
      paddingRight: 20,
      marginLeft: 20,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    body: {
      marginTop: 10,
      fontSize: 14,
      color: '#F8F8F8',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })