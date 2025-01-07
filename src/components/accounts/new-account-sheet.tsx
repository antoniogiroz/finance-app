import type { AccountFormValues } from './account-schema';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { AccountForm } from './account-form';
import { useCreateAccount } from './use-create-account';
import { useNewAccount } from './use-new-account';

export function NewAccountSheet() {
  const { isOpen, close } = useNewAccount();

  const mutation = useCreateAccount();

  function handleSubmit(values: AccountFormValues) {
    mutation.mutate(values, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>

        <AccountForm onSubmit={handleSubmit} disabled={mutation.isPending} />
      </SheetContent>
    </Sheet>
  );
}
