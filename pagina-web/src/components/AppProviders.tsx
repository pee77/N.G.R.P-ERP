"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <CartProvider>{children}</CartProvider>
    </FavoritesProvider>
  );
}
