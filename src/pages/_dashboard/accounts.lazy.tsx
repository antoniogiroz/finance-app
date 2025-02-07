import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAccountStore } from '@/sections/accounts/account.store';
import { AccountsTable } from '@/sections/accounts/list/accounts-table';
import { useAccounts } from '@/sections/accounts/use-accounts';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Loader2, Plus } from 'lucide-react';

export const Route = createLazyFileRoute('/_dashboard/accounts')({
  component: AccountsPage,
});

function AccountsPage() {
  const { open } = useAccountStore();
  const { isLoading } = useAccounts();

  if (isLoading) {
    return (
      <div className="max-w-(--breakpoint-2xl) mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-xs">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-(--breakpoint-2xl) mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-xs">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
          <Button onClick={() => open()} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <AccountsTable />
        </CardContent>
      </Card>
    </div>
  );
}
