// src/components/ProductCard/ProductCard.styles.ts

import { StyleSheet } from "react-native";
import { ThemeColors } from "../../types";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      overflow: "hidden",
    },
    cardContent: {
      flexDirection: "row",
      padding: 12,
    },
    imageContainer: {
      width: 120,
      height: 140,
      borderRadius: 12,
      overflow: "hidden",
      marginRight: 12,
      backgroundColor: "#f0f0f0",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    productImage: {
      width: "100%",
      height: "100%",
    },
    imageText: {
      fontSize: 60,
      textAlign: "center",
    },
    lowStockBadge: {
      position: "absolute",
      top: 8,
      right: 8,
      backgroundColor: "#FF9500",
      paddingHorizontal: 6,
      paddingVertical: 3,
      borderRadius: 6,
    },
    lowStockText: {
      color: "#FFFFFF",
      fontSize: 10,
      fontWeight: "bold",
    },
    outOfStockBadge: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      justifyContent: "center",
      alignItems: "center",
    },
    outOfStockText: {
      color: "#FFFFFF",
      fontSize: 14,
      fontWeight: "bold",
    },
    infoContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    productName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 4,
    },
    productDescription: {
      fontSize: 13,
      color: colors.textSecondary,
      marginBottom: 4,
      lineHeight: 18,
    },
    stockText: {
      fontSize: 12,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.primary,
      marginBottom: 8,
    },
    addButton: {
      backgroundColor: colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    addedButton: {
      backgroundColor: colors.success,
    },
    disabledButton: {
      backgroundColor: colors.textSecondary,
      opacity: 0.5,
    },
    addButtonText: {
      color: colors.buttonText,
      fontSize: 14,
      fontWeight: "600",
    },
  });
