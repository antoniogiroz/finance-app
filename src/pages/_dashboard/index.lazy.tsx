import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
}
