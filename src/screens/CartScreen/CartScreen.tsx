// src/screens/CartScreen/CartScreen.tsx

import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Header } from "../../components/Header/Header";
import { CartItem } from "../../components/CartItem/CartItem";
import { createStyles } from "./CartScreen.styles";

export default function CartScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { cartItems, getCartTotal, getCartItemsCount, clearCart } = useCart();
  const styles = createStyles(colors);

  const total = getCartTotal();
  const itemsCount = getCartItemsCount();

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

    navigation.navigate("Checkout" as never);
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
    navigation.navigate("Home" as never);
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
          <TouchableOpacity
            style={styles.shopButton}
            onPress={handleContinueShopping}
            activeOpacity={0.8}
          >
            <Text style={styles.shopButtonText}>Continue Shopping</Text>
          </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
          activeOpacity={0.8}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClearCart}
          activeOpacity={0.8}
        >
          <Text style={styles.clearButtonText}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
