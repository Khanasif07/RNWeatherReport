import { TextInput,TouchableOpacity,Text,View } from "react-native";
import { s } from "./SearchBar.style.js";
import React, { useState} from "react";
export function SearchBar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
    <View style={s.container}>
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      value={searchText}
      placeholder="Type a city... Ex: Paris"
      onChangeText={(value) => setSearchText(value)}
    />
    { searchText.length > 0 && (
      <TouchableOpacity onPress={() => setSearchText("")} style={s.clearButton}>
        <Text style={s.clearButtonText}>✕</Text>
      </TouchableOpacity>
    )}
    </View>
     </>
  );
}
