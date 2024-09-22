import React from "react";
import { Header } from "../../components/Header/Header.jsx";
import { SectionList, Text } from "react-native";
import { ss } from "./SectionLists.style";
import { useRoute } from "@react-navigation/native";

export function SectionLists({}) {
  const { params } = useRoute();
  const sections = [
    {
      id: "0",
      title: "Basic Components",
      data: [
        { idd: "0", text: "View" },
        { idd: "1", text: "Text" },
        { idd: "2", text: "Image" },
        { idd: "4", text: "View" },
        { idd: "5", text: "Text" },
        { idd: "6", text: "Image" },
        { idd: "7", text: "View" },
        { idd: "8", text: "Text" },
        { idd: "9", text: "Image" },
      ],
    },
    {
      id: "1",
      title: "List Components",
      data: [
        { idd: "3", text: "ScrollView" },
        { idd: "4", text: "ListView" },
      ],
    },
  ];

  return (
    <>
      {/* <Header city={"Section List"} isShowSubTitle={false} /> */}
      <SectionList
        style={ ss.container}
        sections={sections}
        renderItem={({ item }) => <Text style={ss.row}>{item.text}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={ss.header}>{section.title}</Text>
        )}
        keyExtractor={(item) => item.idd}
      />
    </>
  );
}
