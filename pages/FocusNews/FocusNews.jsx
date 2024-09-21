import { useRoute } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { News } from "../../components/News/News.jsx";
import { actionCreators, initialState, reducer } from "../../utils/posts-utils";
import { s } from "./FocusNews.style.js";
import { MeteoAPI } from "../../api/meteo";
import { ActivityIndicator, FlatList, Text, Alert, View,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function FocusNews({}) {
  const { params } = useRoute();
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newsList, setNewsList] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const nav = useNavigation();

  useEffect(() => {
    dispatch(actionCreators.loading())
    const timer = setTimeout(() => {
      fetchPrivateNewsData();
    }, 1000); // Delay in milliseconds (3000 ms = 3 seconds)
    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  async function fetchPrivateNewsData() {
    try {
      const newsResponse = await MeteoAPI.fetchPrivateNewsListData();
      setNewsList(newsResponse);
      console.log("newsResponse", newsResponse);
      dispatch(actionCreators.success(newsResponse))
    } catch (err) {
      Alert.alert("Error !", err);
    }
  }

  const { newsLists, loading, error } = state

  if (loading) {
    return (
      <View style={s.center}>
        <ActivityIndicator size= "large" color="blue" animating={true} />
      </View>
    )
  }

  if (error) {
    return (
      <>
      <Header city={"News"} isShowSubTitle={false} />
      <View style={s.center}>
        <Text>Failed to load posts!</Text>
      </View>
      </>
    )
  }

  const handlePress = (index) => { () => nav.navigate("FocusNews", { newsList })
    // setSelectedIndex(index); // Update the state with the selected index
    console.log("selected index",index)
  };

  

  return (
    <>
      {/* <Header city={"News"} isShowSubTitle={false} /> */}
      <View style={{ marginTop: 10 }}></View>
      <FlatList
        style={s.container}
        keyExtractor={(news) => news.postImageUrl}
        data={newsList}
        renderItem={({ item,index}) => (
          <TouchableOpacity onPress={() => nav.navigate("NewsDetail", { item })}>
          <News
            tag={item.primaryTag}
            date={item.readTime}
            content={item.content}
            imageIcon={item.postImageUrl}
            title={item.title}
          />
          </TouchableOpacity>
        )}
      />
    </>
  );
}
