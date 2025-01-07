import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { accountFormSchema, type AccountFormValues } from './account-schema';

interface Props {
  id?: string;
  defaultValues?: AccountFormValues;
  onSubmit: (values: AccountFormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
}

export function AccountForm({ id, defaultValues, onSubmit, onDelete, disabled }: Props) {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: defaultValues || {
      name: '',
    },
  });

  function handleSubmit(values: AccountFormValues) {
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
          {id ? 'Save changes' : 'Create account'}
        </Button>

        {!!id && (
          <Button
            type="button"
            className="w-full"
            disabled={disabled}
            variant="outline"
            onClick={handleDelete}
          >
            <Trash className="size-4" />
            Delete account
          </Button>
        )}
      </form>
    </Form>
  );
}
