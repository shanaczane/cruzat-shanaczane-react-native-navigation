// src/screens/CheckoutScreen/CheckoutScreen.tsx

import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Header } from "../../components/Header/Header";
import { createStyles } from "./CheckoutScreen.styles";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { cartItems, getCartTotal, getCartItemsCount, clearCart } = useCart();
  const styles = createStyles(colors);

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const tax = subtotal * 0.12;
  const shipping = subtotal > 5000 ? 0 : 150;
  const total = subtotal + tax + shipping;
  const itemsCount = getCartItemsCount();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      navigation.navigate("Home" as never);
      return;
    }

    if (total <= 0 || isNaN(total)) {
      Alert.alert("Error", "Invalid order total. Please try again.");
      return;
    }

    const hasInvalidItem = cartItems.some((item) => item.quantity <= 0);
    if (hasInvalidItem) {
      Alert.alert("Error", "Some items have invalid quantities.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      Alert.alert(
        "Checkout Successful! ✅",
        `Your order of ${itemsCount} item(s) totaling ₱${total.toLocaleString()} has been placed successfully!`,
        [
          {
            text: "OK",
            onPress: () => {
              clearCart();
              navigation.navigate("Home" as never);
            },
          },
        ],
        { cancelable: false },
      );
    }, 1500);
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel Checkout",
      "Are you sure you want to cancel the checkout?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => navigation.goBack(),
          style: "destructive",
        },
      ],
    );
  };

  if (cartItems.length === 0) {
    navigation.navigate("Home" as never);
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title="Checkout" showBack={true} />
      <View style={styles.content}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              🎮 Review your PS5 games order below and click "Checkout" to
              complete your purchase.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.orderSummaryCard}>
            {cartItems.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.orderItem,
                  index === cartItems.length - 1 && styles.orderItemLast,
                ]}
              >
                <View style={styles.orderItemLeft}>
                  <Text style={styles.orderItemName}>{item.name}</Text>
                  <Text style={styles.orderItemDetails}>
                    ₱{item.price.toLocaleString()} × {item.quantity}
                  </Text>
                </View>
                <Text style={styles.orderItemPrice}>
                  ₱{(item.price * item.quantity).toLocaleString()}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.totalCard}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Subtotal ({itemsCount} items)
              </Text>
              <Text style={styles.totalValue}>
                ₱{subtotal.toLocaleString()}
              </Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>VAT (12%)</Text>
              <Text style={styles.totalValue}>₱{tax.toLocaleString()}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Shipping</Text>
              <Text style={styles.totalValue}>
                {shipping === 0 ? "FREE" : `₱${shipping.toLocaleString()}`}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalValue}>
                ₱{total.toLocaleString()}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
          activeOpacity={0.8}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <ActivityIndicator color={colors.buttonText} />
          ) : (
            <Text style={styles.checkoutButtonText}>
              Complete Checkout - ₱{total.toLocaleString()}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancel}
          activeOpacity={0.8}
          disabled={isProcessing}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
