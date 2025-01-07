import { useNewAccount } from '@/components/accounts/use-new-account';
import { Button } from '@/components/ui/button';
import { allAccounts } from '@/data/accounts';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/')({
  component: HomePage,
});

function HomePage() {
  const { open } = useNewAccount();

  return (
    <div>
      <Button onClick={open}>Open</Button>
      {allAccounts.map(account => (
        <div key={account.id}>
          <h2>{account.name}</h2>
        </div>
      ))}
    </div>
  );
}
