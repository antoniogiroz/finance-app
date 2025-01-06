import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/$userId/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();

  return (
    <div>
      <h1>
        Editing user:
        {userId}
      </h1>
    </div>
  );
}
