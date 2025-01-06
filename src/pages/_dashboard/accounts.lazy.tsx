import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/accounts')({
  component: AccountsPage,
});

function AccountsPage() {
  return <div>Hello "/_dashboard/accounts"!</div>;
}
