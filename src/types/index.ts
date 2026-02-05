// src/types/index.ts

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
}


export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
  Checkout: undefined;
};
