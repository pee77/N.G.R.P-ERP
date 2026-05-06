"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type FavoritesContextType = {
  favorites: Record<string, number>;
  toggleFavorite: (productId: string) => void;
  getLikes: (productId: string) => number;
  totalLikes: number;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Record<string, number>>({});

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) => {
      const currentLikes = prev[productId] || 0;
      // Por simplicidad, aumentamos el contador en 1 cada vez que se clickea
      // En una app real, esto podría ser toggle (me gusta/no me gusta)
      return {
        ...prev,
        [productId]: currentLikes + 1,
      };
    });
  }, []);

  const getLikes = useCallback((productId: string) => {
    return favorites[productId] || 0;
  }, [favorites]);

  const totalLikes = Object.values(favorites).reduce((sum, count) => sum + count, 0);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, getLikes, totalLikes }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
