import type { CategoryFormValues } from './category-schema';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useConfirm } from '@/hooks/use-confirm';
import { useCategoryStore } from '../category.store';
import { useCategories } from '../use-categories';
import { CategoryForm } from './category-form';

export function CategorySheet() {
  const { category, isOpen, close } = useCategoryStore();
  const { createCategory, deleteCategory, isLoading } = useCategories();

  async function handleSubmit(values: CategoryFormValues) {
    await createCategory(values);
    close();
  }

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this category.',
  );

  async function handleDelete() {
    const ok = await confirm();

    if (ok) {
      deleteCategory({ id: category!.id });
      close();
    }
  };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={close}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>
              {category ? 'Edit Category' : 'Create Category'}
            </SheetTitle>
            <SheetDescription>
              {category ? 'Edit an existing category' : 'Create a new category to track your transactions.'}
            </SheetDescription>
          </SheetHeader>

          <CategoryForm onSubmit={handleSubmit} onDelete={handleDelete} disabled={isLoading} category={category} />
        </SheetContent>
      </Sheet>
    </>
  );
}
