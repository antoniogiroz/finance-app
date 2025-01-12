import { AccountSheet } from '@/sections/accounts/detail/account-sheet';
import { CategorySheet } from '@/sections/categories/detail/category-sheet';

export function SheetProvider() {
  return (
    <>
      <AccountSheet />
      <CategorySheet />
    </>
  );
}
