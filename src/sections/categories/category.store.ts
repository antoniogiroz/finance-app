import type { Category } from '@/data/categories';
import { create } from 'zustand';

interface CategoryState {
  category?: Category;
  isOpen: boolean;
  open: (category?: Category) => void;
  close: () => void;
}

export const useCategoryStore = create<CategoryState>(set => ({
  category: undefined,
  isOpen: false,
  open: (category?: Category) => set({ isOpen: true, category }),
  close: () => set({ isOpen: false, category: undefined }),
}));
