import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  const users = [
    {
      id: '1',
      name: 'User 1',
    },
    {
      id: '2',
      name: 'User 2',
    },
  ];

  return (
    <div>
      Posts
      <Link className="ml-5" to="/posts/new">
        New Post
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex gap-4">
            <Link to="/users/$userId" params={{ userId: user.id }}>
              {user.name}
            </Link>
            <Link to="/users/$userId/edit" params={{ userId: user.id }}>
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
