import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_dashboard/categories')({
  component: CategoriesPage,
});

function CategoriesPage() {
  return <div>Hello "/_dashboard/categories"!</div>;
}
