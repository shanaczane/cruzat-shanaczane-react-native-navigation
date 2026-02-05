// src/components/Header/Header.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
            <Text style={styles.themeIcon}>{isDarkMode ? "☀️" : "🌙"}</Text>
          </TouchableOpacity>
          {shouldShowCart && (
            <View style={styles.cartBadgeContainer}>
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => navigation.navigate("Cart" as never)}
              >
                <Text style={styles.cartIcon}>🛒</Text>
              </TouchableOpacity>
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
