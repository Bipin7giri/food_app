import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";
import { useFeatures } from "../api";
const HomeScreen = () => {
  const { features, isError, isLoading, mutate } = useFeatures();
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          {/* <Icon.Search height="25" width="25" stroke="gray" /> */}
          <MaterialCommunityIcons name="search-web" size={25} color="gray" />

          <TextInput placeholder="Restaurant" className="ml-2 flex-1" />

          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2">
            <MaterialCommunityIcons name="map-marker" size={20} color="gray" />
            <Text className="text-gray-600">Kathmandu, KTM</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <MaterialCommunityIcons name="select-search" size={20} color="gray" />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />
        {/* featured */}

        <View>
          {features?.map((item, id) => {
            return (
              <FeaturedRow
                key={id}
                title={item.attributes.title}
                restaurants={item.attributes.restaurants}
                description={item.attributes.description}
              />
            );
          })}
        </View>
        {/* <View>
          {[
            featured,
            featured,
            featured,
            featured,
            featured,
            featured,
            featured,
          ].map((item, id) => {
            return (
              <FeaturedRow
                key={id}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
