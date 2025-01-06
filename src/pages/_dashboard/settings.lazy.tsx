import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/settings')({
  component: SeetingsPage,
});

function SeetingsPage() {
  return <div>Hello "/_dashboard/settings"!</div>;
}
