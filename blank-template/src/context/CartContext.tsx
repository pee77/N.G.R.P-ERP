"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { buildPricing } from "@/lib/pricing";
import type { CartItem, Product } from "@/types/commerce";

type CartState = {
  items: CartItem[];
  isCartOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  pricing: ReturnType<typeof buildPricing>;
  isCartOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const initialState: CartState = {
  items: [],
  isCartOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const safeQuantity = Math.max(1, quantity);
      const existingItem = state.items.find((item) => item.productId === product.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + safeQuantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: product.id,
            sku: product.sku,
            name: product.name,
            image: product.image,
            unitPrice: product.price,
            currency: product.currency,
            quantity: safeQuantity,
            brand: product.brand,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload.productId),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };

    case "OPEN_CART":
      return { ...state, isCartOpen: true };

    case "CLOSE_CART":
      return { ...state, isCartOpen: false };

    default:
      return state;
  }
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
    dispatch({ type: "OPEN_CART" }); // Auto open cart when adding
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: "TOGGLE_CART" });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: "OPEN_CART" });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: "CLOSE_CART" });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items: state.items,
      itemCount,
      pricing: buildPricing(state.items),
      isCartOpen: state.isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    };
  }, [state.items, state.isCartOpen, addItem, removeItem, updateQuantity, clearCart, toggleCart, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
