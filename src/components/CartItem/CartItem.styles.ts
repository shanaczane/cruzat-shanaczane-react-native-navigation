// src/components/CartItem/CartItem.styles.ts

import { StyleSheet } from "react-native";
import { ThemeColors } from "../../types";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      marginBottom: 16,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    cardContent: {
      flexDirection: "row",
      marginBottom: 12,
    },
    imageContainer: {
      width: 80,
      height: 80,
      borderRadius: 12,
      overflow: "hidden",
      marginRight: 12,
      backgroundColor: "#f0f0f0",
    },
    productImage: {
      width: "100%",
      height: "100%",
    },
    infoContainer: {
      flex: 1,
      justifyContent: "center",
    },
    productName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 2,
    },
    totalPrice: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.primary,
    },
    controlsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.background,
      borderRadius: 8,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    quantityButton: {
      width: 32,
      height: 32,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 6,
    },
    quantityButtonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    quantityText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginHorizontal: 16,
      minWidth: 30,
      textAlign: "center",
    },
    removeButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: colors.error,
      borderRadius: 8,
    },
    removeButtonText: {
      color: colors.buttonText,
      fontSize: 14,
      fontWeight: "600",
    },
  });
