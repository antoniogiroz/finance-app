import { DataTable } from '@/components/data-table';
import { useCategories } from '../use-categories';
import { columns } from './categories-table-columns';

export function CategoriesTable() {
  const { categories, isLoading, deleteCategories } = useCategories();

  return (
    <DataTable
      filterKey="name"
      columns={columns}
      data={categories}
      onDelete={(row) => {
        const ids = row.map(r => r.original.id);
        deleteCategories({ ids });
      }}
      disabled={isLoading}
    />
  );
}
