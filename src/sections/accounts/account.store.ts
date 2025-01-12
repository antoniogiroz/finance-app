import type { Account } from '@/data/accounts';
import { create } from 'zustand';

interface AccountState {
  account?: Account;
  isOpen: boolean;
  open: (account?: Account) => void;
  close: () => void;
}

export const useAccountStore = create<AccountState>(set => ({
  account: undefined,
  isOpen: false,
  open: (account?: Account) => set({ isOpen: true, account }),
  close: () => set({ isOpen: false, account: undefined }),
}));
