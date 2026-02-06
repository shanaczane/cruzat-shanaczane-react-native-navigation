// src/components/CartItem/CartItem.tsx

import React from "react";
import { View, Text, Pressable, Alert, Image } from "react-native";
import { CartItem as CartItemType } from "../../types";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { createStyles } from "./CartItem.styles";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { colors } = useTheme();
  const { updateQuantity, removeFromCart } = useCart();
  const styles = createStyles(colors);
  const isEmoji = typeof item.image === "string";

  const handleIncrement = () => {
    if (item.quantity >= 99) {
      Alert.alert("Limit Reached", "Maximum quantity is 99 items per product.");
      return;
    }
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    // Directly decrease quantity (will be removed if it reaches 0)
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${item.name} from cart?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          onPress: () => removeFromCart(item.id),
          style: "destructive",
        },
      ],
    );
  };

  const itemTotal = item.price * item.quantity;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          {isEmoji ? (
            <Text style={styles.imageText}>{item.image}</Text>
          ) : (
            <Image
              source={item.image}
              style={styles.productImage}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>
            ₱{item.price.toLocaleString()} each
          </Text>
          <Text style={styles.totalPrice}>
            Total: ₱{itemTotal.toLocaleString()}
          </Text>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.quantityContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.quantityButton,
              pressed && { opacity: 0.7 },
            ]}
            onPress={handleDecrement}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.quantityButton,
              pressed && { opacity: 0.7 },
            ]}
            onPress={handleIncrement}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </Pressable>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.removeButton,
            pressed && { opacity: 0.7 },
          ]}
          onPress={handleRemove}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
};
