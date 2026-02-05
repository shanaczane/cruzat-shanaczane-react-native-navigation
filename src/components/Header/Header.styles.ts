// src/components/Header/Header.styles.ts

import { StyleSheet } from "react-native";
import { ThemeColors } from "../../types";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.card,
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    headerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    backButton: {
      marginRight: 12,
      padding: 4,
    },
    backButtonText: {
      fontSize: 28,
      color: colors.primary,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    themeButton: {
      padding: 8,
      marginLeft: 12,
    },
    themeIcon: {
      fontSize: 24,
    },
    cartBadgeContainer: {
      position: "relative",
      marginLeft: 12,
    },
    cartButton: {
      padding: 8,
    },
    cartIcon: {
      fontSize: 24,
    },
    badge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: colors.notification,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 4,
    },
    badgeText: {
      color: "#FFFFFF",
      fontSize: 12,
      fontWeight: "700",
    },
  });
