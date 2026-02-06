// src/screens/HomeScreen/HomeScreen.tsx

import React, { useState } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../constants/products";
import { createStyles } from "./HomeScreen.styles";
import { HomeScreenProps } from "../../types";

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [isLoading, setIsLoading] = useState(true);

  
  useFocusEffect(
    React.useCallback(() => {
      console.log("Home screen focused");
      
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []),
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Header title="PS5 Games" showCart={true} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      </View>
    );
  }

  if (!PRODUCTS || PRODUCTS.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="PS5 Games" showCart={true} />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📦</Text>
          <Text style={styles.emptyText}>
            No products available at the moment
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="PS5 Games" showCart={true} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}
