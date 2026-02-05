// src/types/navigation.ts

import { Product } from "./index";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
  Checkout: undefined;
};
