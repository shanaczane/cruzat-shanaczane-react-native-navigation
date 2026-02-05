// src/components/CartItem/CartItem.tsx

import React from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
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

  const handleIncrement = () => {
    if (item.quantity >= 99) {
      Alert.alert("Limit Reached", "Maximum quantity is 99 items per product.");
      return;
    }
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      Alert.alert("Remove Item", "Do you want to remove this item from cart?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          onPress: () => removeFromCart(item.id),
          style: "destructive",
        },
      ]);
    }
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
          <Image
            source={item.image}
            style={styles.productImage}
            resizeMode="cover"
          />
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
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
            activeOpacity={0.7}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
            activeOpacity={0.7}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={handleRemove}
          activeOpacity={0.7}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
