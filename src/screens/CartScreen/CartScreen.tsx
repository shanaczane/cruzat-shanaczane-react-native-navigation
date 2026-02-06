// src/screens/CartScreen/CartScreen.tsx

import React from "react";
import { View, ScrollView, Text, Pressable, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Header } from "../../components/Header/Header";
import { CartItem } from "../../components/CartItem/CartItem";
import { createStyles } from "./CartScreen.styles";
import { CartScreenProps } from "../../types";

export default function CartScreen({ navigation, route }: CartScreenProps) {
  const { colors } = useTheme();
  const { cartItems, getCartTotal, getCartItemsCount, clearCart } = useCart();
  const styles = createStyles(colors);

  const total = getCartTotal();
  const itemsCount = getCartItemsCount();

  useFocusEffect(
    React.useCallback(() => {
      console.log("Cart screen focused - items:", cartItems.length);
    }, [cartItems]),
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert(
        "Empty Cart",
        "Please add items to your cart before checking out.",
      );
      return;
    }

    if (total <= 0) {
      Alert.alert("Error", "Invalid cart total.");
      return;
    }

    navigation.push("Checkout");
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      return;
    }

    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          onPress: () => {
            clearCart();
          },
          style: "destructive",
        },
      ],
    );
  };

  const handleContinueShopping = () => {
    navigation.goBack();
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Cart" showBack={true} />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛒</Text>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>
            Add some PS5 games to your cart to get started
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.shopButton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={handleContinueShopping}
          >
            <Text style={styles.shopButtonText}>Continue Shopping</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Cart" showBack={true} />
      <View style={styles.content}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items</Text>
            <Text style={styles.summaryValue}>{itemsCount}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>₱{total.toLocaleString()}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₱{total.toLocaleString()}</Text>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.checkoutButton,
            pressed && { opacity: 0.8 },
          ]}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.clearButton,
            pressed && { opacity: 0.8 },
          ]}
          onPress={handleClearCart}
        >
          <Text style={styles.clearButtonText}>Clear Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}
