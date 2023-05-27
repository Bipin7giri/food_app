import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DishRow = ({ item }) => {
  item = item?.attributes;
  return (
    <View className="flex-row items-center bg-white p-3 rounded-r-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        source={{ uri: item.image.data.attributes.url }}
        style={{ height: 100, width: 100 }}
      />
      {/* <Text>{JSON.stringify(item)}</Text> */}
      <View className="flex flex-1 space-x-3">
        <View className="pl-3">
          <Text className="text-xl">{item?.name}</Text>
          <Text className="text-gray-700">{item?.description}</Text>
        </View>
        <View className="flex-row justify-between pl-1 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <MaterialCommunityIcons name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <MaterialCommunityIcons name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
