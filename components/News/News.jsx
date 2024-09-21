import { TouchableOpacity, View, Text, Image } from "react-native";
import { newsStyle} from "./News.style";
import { useNavigation } from "@react-navigation/native";
export function News({ imageIcon, title, tag, date, content  }) {
  const nav = useNavigation();

  const DynamicViewExample = ({ message }) => {
    return (
      <View style={newsStyle.dynamicView}>
        <Text style={newsStyle.tagText} >{message}</Text>
      </View>
    );
  };

  return (
    <View style={newsStyle.container}>
      <View style={ newsStyle.textStackRow}>
        <Image
          style={newsStyle.image}
          // source={{ uri: "https://i.pravatar.cc/300" }}
          source={{ uri: imageIcon }}
        />
        <View style={ newsStyle.textStackColumn}>
          <View style={ {backgroundColor: "transparent"}}>
            <Text style={ newsStyle.text } numberOfLines={3}> {title} </Text>
          </View>
          <DynamicViewExample message={tag} />
          <View>
            <Text style={ newsStyle.timeText } numberOfLines={1} > {date} minute read </Text>
          </View>
          <View>
            <Text style={ newsStyle.contentText } numberOfLines={2}>  {content} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
