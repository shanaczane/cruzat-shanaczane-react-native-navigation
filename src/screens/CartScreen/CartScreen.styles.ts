// src/screens/CartScreen/CartScreen.styles.ts

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
      padding: 20,
      paddingBottom: 180,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
    },
    emptyIcon: {
      fontSize: 80,
    },
    emptyTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
      marginTop: 20,
      marginBottom: 8,
    },
    emptyText: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: "center",
      marginBottom: 24,
    },
    shopButton: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 10,
    },
    shopButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: "600",
    },
    bottomContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.card,
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    summaryContainer: {
      marginBottom: 16,
    },
    summaryRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    summaryLabel: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    summaryValue: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 12,
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    totalLabel: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },
    totalValue: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.primary,
    },
    checkoutButton: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
    },
    checkoutButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: "700",
    },
    clearButton: {
      backgroundColor: colors.error,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 12,
    },
    clearButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: "600",
    },
  });
