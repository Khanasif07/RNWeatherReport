import React, { useEffect, useReducer, useState} from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./Posts.style";
import { Txt } from "../../components/Txt/Txt";
import { Header } from "../../components/Header/Header.jsx";
import { MeteoAPI } from "../../api/meteo";
import { actionCreators, initialState, reducer } from "../../utils/posts-utils";

export  function Posts({}) {
  const { params } = useRoute();
  const [state, dispatch] = useReducer(reducer, initialState)
  const [post, setPost] = useState();

  useEffect(() => {
    dispatch(actionCreators.loading())
    const timer = setTimeout(() => {
      fetchPosts()
      // fetchPrivateNewsData()
    }, 1000); // Delay in milliseconds (3000 ms = 3 seconds)
    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [])

  async function fetchPosts() {
    try {
      const postResponse = await MeteoAPI.fetchPostList();
      setPost(postResponse);
      console.log("postResponse", postResponse);
      dispatch(actionCreators.success(posts))
    } catch (err) {
      dispatch(actionCreators.failure())
      Alert.alert("Error !", err);
    }
  }

  const { posts, loading, error } = state
  const handleRetryPress = () => {
    dispatch(actionCreators.loading())
    const timer = setTimeout(() => {
      fetchPosts()
    }, 1000); 
    console.log("retry tapped")
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size= "large" color="blue" animating={true} />
      </View>
    )
  }

  if (error) {
    return (
      <>
      {/* <Header city={"POSTS"} isShowSubTitle={false} /> */}
      <View style={styles.center}>
        <Text>Failed to load posts!</Text>
        <TouchableOpacity onPress={() => handleRetryPress()}>
        <Text style={ styles.retryTitle } >Retry</Text>
        </TouchableOpacity>
      </View>
      </>
    )
  }

  

  return (
    <>
    {/* <Header city={"POSTS"} isShowSubTitle={false} /> */}
    <FlatList
      style={styles.container}
      keyExtractor={(post) => post.id}
      data={post}
      renderItem={({ item: { id, title, body }, index }) => (
        <View key={id} style={styles.post}>
          <Text style={styles.title}>
            {index}. {title}
          </Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      )}
    />
    </>
  );
}