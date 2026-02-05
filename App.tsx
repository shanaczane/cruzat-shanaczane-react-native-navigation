// App.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./src/context/ThemeContext";
import { CartProvider } from "./src/context/CartContext";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CartScreen from "./src/screens/CartScreen/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen/CheckoutScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
}
