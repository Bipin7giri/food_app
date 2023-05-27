import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcons from "../components/cartIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
const Resturant = () => {
  const { params } = useRoute();

  let item = params?.item?.dishes.data;
  let restaurant = params?.item;
  const navigation = useNavigation();
  return (
    <View>
      <CartIcons />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: restaurant?.image?.data?.attributes?.url }}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-8 left-2 bg-gray-50 p-2 rounded-full shadow"
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-green-700">{restaurant.stars}</Text>
                <Text className="text-gray-700">
                  ({item.reviews} reviews).
                  <Text className="font-semibold">{restaurant.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MaterialCommunityIcons
                  name="map-marker"
                  size={15}
                  color="gray"
                />
                <Text className="text-gray-700 text-xs">
                  Nearby. {restaurant.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.map((dish, id) => {
            return <DishRow item={{ ...dish }} key={id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Resturant;
