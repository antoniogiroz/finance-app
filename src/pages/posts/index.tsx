import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
});

function RouteComponent() {
  const posts = [
    {
      id: '1',
      title: 'Post 1',
    },
    {
      id: '2',
      title: 'Post 2',
    },
  ];

  return (
    <div>
      Posts

      <Link className="ml-5" to="/posts/new">New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="flex gap-4">
            <Link to="/posts/$postId" params={{ postId: post.id }}>{post.title}</Link>
            <Link to="/posts/$postId/edit" params={{ postId: post.id }}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
