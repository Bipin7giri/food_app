import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
// import { categories } from "../constants";
import { useCategory } from "../api";
import { themeColors } from "../theme";
const Categories = () => {
  const { categories, mutate, isLoading, isError } = useCategory();
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      {isLoading && (
        <ActivityIndicator color={themeColors.bgColor(2)} size="large" />
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-y-visible"
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
      >
        {categories?.map((category, id) => {
          let isActive = category?.attributes?.id == activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semi-bold text-gray-800"
            : "text-gray-500";
          return (
            <View key={id} className="flex justify-center item-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.attributes.id)}
                className={
                  "py-1 px-1 rounded-full shadow bg-gray-200" + btnClass
                }
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{
                    uri:
                      category?.attributes?.image?.data[0]?.attributes?.url ===
                      null
                        ? ""
                        : category?.attributes?.image?.data[0]?.attributes?.url,
                  }}
                />
              </TouchableOpacity>
              <Text className={"text-sm" + textClass}>
                {category?.attributes?.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
