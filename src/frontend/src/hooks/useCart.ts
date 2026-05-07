import type { CartItem, Part } from "@/types";
import { create } from "zustand";

interface CartStore {
  items: CartItem[];
  addItem: (part: Part, quantity?: number) => void;
  removeItem: (partId: string) => void;
  updateQuantity: (partId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getTotalPrice: (parts: Map<string, Part>) => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],

  addItem: (part: Part, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((i) => i.partId === part.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.partId === part.id
              ? { ...i, quantity: i.quantity + quantity, part }
              : i,
          ),
        };
      }
      return { items: [...state.items, { partId: part.id, quantity, part }] };
    });
  },

  removeItem: (partId: string) => {
    set((state) => ({
      items: state.items.filter((i) => i.partId !== partId),
    }));
  },

  updateQuantity: (partId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(partId);
      return;
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.partId === partId ? { ...i, quantity } : i,
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalCount: () => {
    return get().items.reduce((sum, i) => sum + i.quantity, 0);
  },

  getTotalPrice: (parts: Map<string, Part>) => {
    return get().items.reduce((sum, i) => {
      const part = parts.get(i.partId) ?? i.part;
      return sum + (part ? part.price * i.quantity : 0);
    }, 0);
  },
}));
