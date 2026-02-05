// src/context/CartContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";
import { Alert } from "react-native";
import { Product, CartItem, CartContextType } from "../types";
import { PRODUCTS } from "../constants/products";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const validateProduct = (product: Product): boolean => {
    if (!product || !product.id || !product.name || product.price <= 0) {
      Alert.alert("Error", "Invalid product data");
      return false;
    }
    return true;
  };

  const validateQuantity = (quantity: number): boolean => {
    if (quantity < 0 || !Number.isInteger(quantity)) {
      Alert.alert("Error", "Invalid quantity. Must be a positive integer.");
      return false;
    }
    if (quantity > 99) {
      Alert.alert("Error", "Maximum quantity is 99 items per product.");
      return false;
    }
    return true;
  };

  const getProductStock = (productId: string): number => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return 0;

    const cartItem = cartItems.find((item) => item.id === productId);
    const inCartQuantity = cartItem ? cartItem.quantity : 0;

    return product.stock - inCartQuantity;
  };

  const addToCart = (product: Product) => {
    try {
      if (!validateProduct(product)) {
        return;
      }

      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        const availableStock = getProductStock(product.id);

        if (existingItem) {
          // Check stock before adding
          if (availableStock <= 0) {
            Alert.alert("Out of Stock", "This item is currently out of stock.");
            return prevItems;
          }

          if (existingItem.quantity >= 99) {
            Alert.alert("Error", "Maximum quantity reached for this product.");
            return prevItems;
          }

          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        // check stock
        if (availableStock <= 0) {
          Alert.alert("Out of Stock", "This item is currently out of stock.");
          return prevItems;
        }

        return [...prevItems, { ...product, quantity: 1 }];
      });
    } catch (error) {
      Alert.alert("Error", "Failed to add item to cart");
      console.error("Add to cart error:", error);
    }
  };

  const removeFromCart = (productId: string) => {
    try {
      if (!productId || productId.trim() === "") {
        Alert.alert("Error", "Invalid product ID");
        return;
      }

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId),
      );
    } catch (error) {
      Alert.alert("Error", "Failed to remove item from cart");
      console.error("Remove from cart error:", error);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    try {
      if (!productId || productId.trim() === "") {
        Alert.alert("Error", "Invalid product ID");
        return;
      }

      if (!validateQuantity(quantity)) {
        return;
      }

      if (quantity === 0) {
        removeFromCart(productId);
        return;
      }

      // Check stock before updating
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product && quantity > product.stock) {
        Alert.alert(
          "Insufficient Stock",
          `Only ${product.stock} items available in stock.`,
        );
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    } catch (error) {
      Alert.alert("Error", "Failed to update quantity");
      console.error("Update quantity error:", error);
    }
  };

  const clearCart = () => {
    try {
      setCartItems([]);
    } catch (error) {
      Alert.alert("Error", "Failed to clear cart");
      console.error("Clear cart error:", error);
    }
  };

  const getCartTotal = (): number => {
    try {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    } catch (error) {
      console.error("Calculate total error:", error);
      return 0;
    }
  };

  const getCartItemsCount = (): number => {
    try {
      return cartItems.reduce((count, item) => count + item.quantity, 0);
    } catch (error) {
      console.error("Calculate items count error:", error);
      return 0;
    }
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    getProductStock,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
