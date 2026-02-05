// src/screens/ProductDetailScreen/ProductDetailScreen.styles.ts

import { StyleSheet } from "react-native";
import { ThemeColors } from "../../types";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 100,
    },
    imageContainer: {
      width: "100%",
      height: 300,
      backgroundColor: colors.card,
      justifyContent: "center",
      alignItems: "center",
    },
    productImage: {
      width: "100%",
      height: "100%",
    },
    imageText: {
      fontSize: 120,
    },
    infoSection: {
      padding: 20,
      backgroundColor: colors.card,
      marginTop: 2,
    },
    productName: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 8,
    },
    productPrice: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.primary,
      marginBottom: 16,
    },
    stockContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    stockLabel: {
      fontSize: 16,
      color: colors.textSecondary,
      marginRight: 8,
    },
    stockValue: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.success,
    },
    lowStock: {
      color: "#FF9500",
    },
    outOfStock: {
      color: colors.error,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 12,
    },
    description: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 12,
    },
    longDescription: {
      fontSize: 15,
      color: colors.textSecondary,
      lineHeight: 22,
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    quantityButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    quantityButtonText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.buttonText,
    },
    quantityText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginHorizontal: 32,
      minWidth: 40,
      textAlign: "center",
    },
    totalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: colors.background,
      borderRadius: 12,
    },
    totalLabel: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.text,
    },
    totalValue: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.primary,
    },
    bottomContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 16,
      backgroundColor: colors.card,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    addButton: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
    },
    disabledButton: {
      backgroundColor: colors.textSecondary,
      opacity: 0.5,
    },
    addButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
