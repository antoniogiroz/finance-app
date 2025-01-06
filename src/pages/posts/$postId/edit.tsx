import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();

  return (
    <div>
      <h1>
        Editing post:
        {postId}
      </h1>
    </div>
  );
}
