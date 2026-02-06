// src/components/ProductCard/ProductCard.tsx

import React, { useState } from "react";
import { View, Text, Pressable, Animated, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product, RootStackParamList } from "../../types";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { createStyles } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const { addToCart, cartItems, getProductStock } = useCart();
  const styles = createStyles(colors);
  const [scaleValue] = useState(new Animated.Value(1));

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const availableStock = getProductStock(product.id);
  const isEmoji = typeof product.image === "string";

  const handleAddToCart = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    addToCart(product);
  };

  const handleViewDetails = () => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <Pressable onPress={handleViewDetails}>
      {({ pressed }) => (
        <Animated.View
          style={[
            styles.card,
            { transform: [{ scale: scaleValue }] },
            pressed && { opacity: 0.9 },
          ]}
        >
          <View style={styles.cardContent}>
            <View style={styles.imageContainer}>
              {isEmoji ? (
                <Text style={styles.imageText}>{product.image}</Text>
              ) : (
                <Image
                  source={product.image}
                  style={styles.productImage}
                  resizeMode="cover"
                />
              )}
              {availableStock <= 5 && availableStock > 0 && (
                <View style={styles.lowStockBadge}>
                  <Text style={styles.lowStockText}>
                    Only {availableStock} left!
                  </Text>
                </View>
              )}
              {availableStock === 0 && (
                <View style={styles.outOfStockBadge}>
                  <Text style={styles.outOfStockText}>Out of Stock</Text>
                </View>
              )}
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>
                {product.description}
              </Text>
              <Text style={styles.stockText}>
                Stock: {availableStock} available
              </Text>
              <Text style={styles.productPrice}>
                ₱{product.price.toLocaleString()}
              </Text>
              <Pressable
                style={({ pressed }) => [
                  styles.addButton,
                  quantityInCart > 0 && styles.addedButton,
                  availableStock === 0 && styles.disabledButton,
                  pressed && !availableStock && { opacity: 0.7 },
                ]}
                onPress={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                disabled={availableStock === 0}
              >
                {({ pressed }) => (
                  <Text
                    style={[styles.addButtonText, pressed && { opacity: 0.8 }]}
                  >
                    {availableStock === 0
                      ? "Out of Stock"
                      : quantityInCart > 0
                        ? `Add More (${quantityInCart})`
                        : "Add to Cart"}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </Animated.View>
      )}
    </Pressable>
  );
};
