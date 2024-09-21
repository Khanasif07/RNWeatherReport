import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Image, TouchableOpacity, View } from "react-native";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View>
        <TouchableOpacity onPress={() => nav.navigate("Posts", { city })}>
          <Txt>{city}</Txt>
        </TouchableOpacity>
      </View>

      <View style={s.interpretation}>
      <TouchableOpacity
          onPress={() => nav.navigate("FocusNews", { city })}
        >
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
        </TouchableOpacity>
      </View>

      <View style={s.temperature_box}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}
        >
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate("SectionLists", { city })}>
          <Image style={s.image} source={interpretation.image} />
        </TouchableOpacity>
      </View>
    </>
  );
}
