import type { Account } from '@/data/accounts';
import { create } from 'zustand';

interface NewAccountState {
  account?: Account;
  isOpen: boolean;
  open: (account?: Account) => void;
  close: () => void;
}

export const useAccountStore = create<NewAccountState>(set => ({
  account: undefined,
  isOpen: false,
  open: (account?: Account) => set({ isOpen: true, account }),
  close: () => set({ isOpen: false, account: undefined }),
}));
