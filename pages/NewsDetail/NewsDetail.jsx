import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";
import { s } from "./NewsDetail.style.js";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";

export function NewsDetail({}) {
  const { params } = useRoute();
  console.log("params", params);

  const DynamicViewExample = ({ message }) => {
    return (
      <View style={s.dynamicView}>
        <Text style={s.tagText}>{message}</Text>
      </View>
    );
  };

  const newsListData = (
    <ScrollView>
      <View>
        <Image style={s.image} source={{ uri: params.item.postImageUrl }} />
        <View style={ s.leftAligned}>
          <View>
            <DynamicViewExample message={params.item.primaryTag} />
          </View>
          <View>
            <Text style={s.title}>{params.item.title}</Text>
          </View>
          <View>
            <Text style={s.time}>{params.item.readTime} minutes read.</Text>
          </View>
          <View>
            <Text style={s.content}>{params.item.content}</Text>
          </View>
          <View style={s.footerView }>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <>
      <View style={s.container}>
        {/* <Header city={"News Detail"} isShowSubTitle={false} /> */}
        {newsListData}
      </View>
    </>
  );
}
