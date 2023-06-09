import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CartScreen = () => {
  const restaurant = featured.restaurants[0].dishes;
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <MaterialCommunityIcons name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-center font-bold text-xl">Your Cart</Text>
        <Text className="text-center text-gray-500">{restaurant.name}</Text>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 mt-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        className="mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {restaurant?.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-r-3xl mb-3 shadow-md "
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              {/* <Text>{JSON.stringify(dish)}</Text> */}
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <MaterialCommunityIcons name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Deliver ee</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$20</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
