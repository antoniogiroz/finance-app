import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/transactions')({
  component: TransaccionsPage,
});

function TransaccionsPage() {
  return <div>Hello "/_dashboard/transactions"!</div>;
}
