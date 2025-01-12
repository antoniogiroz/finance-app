import type { AccountFormValues } from './account-schema';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useConfirm } from '@/hooks/use-confirm';
import { useAccountStore } from '../account.store';
import { useAccounts } from '../use-accounts';
import { AccountForm } from './account-form';

export function AccountSheet() {
  const { account, isOpen, close } = useAccountStore();
  const { createAccount, deleteAccount, isLoading } = useAccounts();

  async function handleSubmit(values: AccountFormValues) {
    await createAccount(values);
    close();
  }

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this account.',
  );

  async function handleDelete() {
    const ok = await confirm();

    if (ok) {
      await deleteAccount({ id: account!.id });
      close();
    }
  };

  return (
    <>
      <ConfirmDialog />
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

          <AccountForm onSubmit={handleSubmit} onDelete={handleDelete} disabled={isLoading} account={account} />
        </SheetContent>
      </Sheet>
    </>
  );
}
