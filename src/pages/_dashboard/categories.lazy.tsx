import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useCategoryStore } from '@/sections/categories/category.store';
import { CategoriesTable } from '@/sections/categories/list/categories-table';
import { useCategories } from '@/sections/categories/use-categories';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Loader2, Plus } from 'lucide-react';

export const Route = createLazyFileRoute('/_dashboard/categories')({
  component: CategoriesPage,
});

function CategoriesPage() {
  const { open } = useCategoryStore();
  const { isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Categories page</CardTitle>
          <Button onClick={() => open()} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <CategoriesTable />
        </CardContent>
      </Card>
    </div>
  );
}
