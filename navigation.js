import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator();
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Resturant from "./screens/Restaurant";
import CartScreen from "./screens/CartScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Resturant} />
        <Stack.Screen
          name="Cart"
          options={{
            presentation: "modal",
          }}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
