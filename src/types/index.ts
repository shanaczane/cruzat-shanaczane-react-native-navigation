// src/types/index.ts

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | any;
  description: string;
  stock: number;
  longDescription?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  notification: string;
  error: string;
  success: string;
  buttonText: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: ThemeColors;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  getProductStock: (productId: string) => number;
  completePurchase: () => void;
}


export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
  Checkout: undefined;
};


export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
  route: RouteProp<RootStackParamList, "Home">;
};

export type ProductDetailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ProductDetail">;
  route: RouteProp<RootStackParamList, "ProductDetail">;
};

export type CartScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Cart">;
  route: RouteProp<RootStackParamList, "Cart">;
};

export type CheckoutScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Checkout">;
  route: RouteProp<RootStackParamList, "Checkout">;
};
