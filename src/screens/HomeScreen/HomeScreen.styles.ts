// src/screens/HomeScreen/HomeScreen.styles.ts

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
      paddingBottom: 100,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
    },
    emptyText: {
      fontSize: 18,
      color: colors.textSecondary,
      textAlign: "center",
      marginTop: 20,
    },
    emptyIcon: {
      fontSize: 60,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      fontSize: 16,
      color: colors.textSecondary,
      marginTop: 12,
    },
    cartButtonContainer: {
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
    cartButton: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    cartButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: "700",
      marginRight: 8,
    },
    cartButtonBadge: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 2,
      minWidth: 24,
    },
    cartButtonBadgeText: {
      color: colors.buttonText,
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
    },
  });
