// src/screens/CheckoutScreen/CheckoutScreen.styles.ts

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
      paddingBottom: 200,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 16,
    },
    orderSummaryCard: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    orderItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    orderItemLast: {
      borderBottomWidth: 0,
    },
    orderItemLeft: {
      flex: 1,
      marginRight: 12,
    },
    orderItemName: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 4,
    },
    orderItemDetails: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    orderItemPrice: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.primary,
    },
    totalCard: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    totalLabel: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    totalValue: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 12,
    },
    grandTotalRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    grandTotalLabel: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },
    grandTotalValue: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.primary,
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
    checkoutButton: {
      backgroundColor: colors.success,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
    },
    checkoutButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: "700",
    },
    cancelButton: {
      backgroundColor: colors.error,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 12,
    },
    cancelButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: "600",
    },
    infoCard: {
      backgroundColor: colors.primary + "20",
      borderRadius: 10,
      padding: 16,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.primary + "40",
    },
    infoText: {
      fontSize: 14,
      color: colors.text,
      lineHeight: 20,
    },
  });
