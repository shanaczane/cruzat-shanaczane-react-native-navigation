// src/components/ProductCard/ProductCard.tsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
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

  const isInCart = cartItems.some((item) => item.id === product.id);
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
    <TouchableOpacity onPress={handleViewDetails} activeOpacity={0.9}>
      <Animated.View
        style={[styles.card, { transform: [{ scale: scaleValue }] }]}
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
            <TouchableOpacity
              style={[
                styles.addButton,
                isInCart && styles.addedButton,
                availableStock === 0 && styles.disabledButton,
              ]}
              onPress={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              activeOpacity={0.7}
              disabled={availableStock === 0}
            >
              <Text style={styles.addButtonText}>
                {availableStock === 0
                  ? "Out of Stock"
                  : isInCart
                    ? "Add More"
                    : "Add to Cart"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
