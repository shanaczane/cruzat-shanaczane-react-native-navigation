// src/components/Header/Header.tsx

import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { createStyles } from "./Header.styles";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showCart?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showCart = false,
}) => {
  const navigation = useNavigation();
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCart();
  const styles = createStyles(colors);

  const cartItemsCount = getCartItemsCount();

  const shouldShowBack = Boolean(showBack);
  const shouldShowCart = Boolean(showCart);

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.titleContainer}>
          {shouldShowBack && (
            <Pressable
              style={({ pressed }) => [
                styles.backButton,
                pressed && { opacity: 0.7 },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>←</Text>
            </Pressable>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.themeButton,
              pressed && { opacity: 0.7 },
            ]}
            onPress={toggleTheme}
          >
            <Text style={styles.themeIcon}>{isDarkMode ? "☀️" : "🌙"}</Text>
          </Pressable>
          {shouldShowCart && (
            <View style={styles.cartBadgeContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.cartButton,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => navigation.navigate("Cart" as never)}
              >
                <Text style={styles.cartIcon}>🛒</Text>
              </Pressable>
              {cartItemsCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItemsCount}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
