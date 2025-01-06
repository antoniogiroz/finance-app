import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button>Click Me</Button>
    </div>
  );
}
