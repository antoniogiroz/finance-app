import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/posts/new"!</div>;
}
