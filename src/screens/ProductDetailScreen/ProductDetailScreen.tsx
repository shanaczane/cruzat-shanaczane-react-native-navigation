// src/screens/ProductDetailScreen/ProductDetailScreen.tsx

import React, { useState } from "react";
import { View, ScrollView, Text, Image, Pressable, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Header } from "../../components/Header/Header";
import { createStyles } from "./ProductDetailScreen.styles";
import { ProductDetailScreenProps } from "../../types";

export default function ProductDetailScreen({
  navigation,
  route,
}: ProductDetailScreenProps) {
  const { colors } = useTheme();
  const { addToCart, getProductStock } = useCart();
  const styles = createStyles(colors);

  const product = route.params?.product;
  const [quantity, setQuantity] = useState(1);

  // useFocusEffect
  useFocusEffect(
    React.useCallback(() => {
      console.log("Product detail focused:", product?.name);
      // Reset quantity when screen is focused
      setQuantity(1);
    }, [product]),
  );

  if (!product) {
    Alert.alert("Error", "Product not found");
    navigation.goBack();
    return null;
  }

  const availableStock = getProductStock(product.id);
  const isEmoji = typeof product.image === "string";

  const handleAddToCart = () => {
    if (availableStock === 0) {
      Alert.alert("Out of Stock", "This item is currently out of stock.");
      return;
    }

    if (quantity > availableStock) {
      Alert.alert(
        "Insufficient Stock",
        `Only ${availableStock} items available.`,
      );
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    Alert.alert("Added to Cart", `${quantity} item(s) added to your cart!`, [
      {
        text: "Continue Shopping",
        onPress: () => {
          setQuantity(1);
        },
      },
      {
        text: "Go to Cart",
        onPress: () => navigation.navigate("Cart"),
      },
    ]);
  };

  const incrementQuantity = () => {
    if (quantity < availableStock && quantity < 99) {
      setQuantity(quantity + 1);
    } else if (quantity >= availableStock) {
      Alert.alert(
        "Stock Limit",
        `Only ${availableStock} items available in stock.`,
      );
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Product Details" showBack={true} showCart={true} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          {isEmoji ? (
            <Text style={styles.imageText}>{product.image}</Text>
          ) : (
            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>
            ₱{product.price.toLocaleString()}
          </Text>

          <View style={styles.stockContainer}>
            <Text style={styles.stockLabel}>Availability:</Text>
            <Text
              style={[
                styles.stockValue,
                availableStock === 0 && styles.outOfStock,
                availableStock > 0 && availableStock <= 5 && styles.lowStock,
              ]}
            >
              {availableStock === 0
                ? "Out of Stock"
                : `${availableStock} in stock`}
            </Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          {product.longDescription && (
            <>
              <Text style={styles.longDescription}>
                {product.longDescription}
              </Text>
            </>
          )}

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.quantityContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.quantityButton,
                (pressed || quantity <= 1) && { opacity: 0.7 },
              ]}
              onPress={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable
              style={({ pressed }) => [
                styles.quantityButton,
                (pressed ||
                  quantity >= availableStock ||
                  availableStock === 0) && { opacity: 0.7 },
              ]}
              onPress={incrementQuantity}
              disabled={quantity >= availableStock || availableStock === 0}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>
              ₱{(product.price * quantity).toLocaleString()}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            availableStock === 0 && styles.disabledButton,
            pressed && availableStock > 0 && { opacity: 0.8 },
          ]}
          onPress={handleAddToCart}
          disabled={availableStock === 0}
        >
          <Text style={styles.addButtonText}>
            {availableStock === 0 ? "Out of Stock" : "Add to Cart"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
