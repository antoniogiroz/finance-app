import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { categoryFormSchema, type CategoryFormValues } from './category-schema';

interface Props {
  category?: CategoryFormValues;
  onSubmit: (values: CategoryFormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
}

export function CategoryForm({ category, onSubmit, onDelete, disabled }: Props) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: category || {
      name: '',
    },
  });

  function handleSubmit(values: CategoryFormValues) {
    onSubmit(values);
  }

  function handleDelete() {
    onDelete?.();
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 pt-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Cash, Bank, Credit Card"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
          {category ? 'Save changes' : 'Create category'}
        </Button>

        {!!category && (
          <Button
            type="button"
            className="w-full"
            disabled={disabled}
            variant="outline"
            onClick={handleDelete}
          >
            <Trash className="size-4" />
            Delete category
          </Button>
        )}
      </form>
    </Form>
  );
}
