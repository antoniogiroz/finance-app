import type { AccountFormValues } from './account-schema';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useAccountStore } from '../account.store';
import { useAccounts } from '../use-accounts';
import { AccountForm } from './account-form';

export function AccountSheet() {
  const { account, isOpen, close } = useAccountStore();
  const { createAccount, isLoading } = useAccounts();

  async function handleSubmit(values: AccountFormValues) {
    await createAccount(values);
    close();
  }

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            {account ? 'Edit Account' : 'Create Account'}
          </SheetTitle>
          <SheetDescription>
            {account ? 'Edit an existing account' : 'Create a new account to track your transactions.'}
          </SheetDescription>
        </SheetHeader>

        <AccountForm onSubmit={handleSubmit} disabled={isLoading} account={account} />
      </SheetContent>
    </Sheet>
  );
}
