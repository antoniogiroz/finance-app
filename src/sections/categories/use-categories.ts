import { allCategories } from '@/data/categories';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useCategories() {
  const queryClient = useQueryClient();

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return allCategories;
    },
  });

  const createMutation = useMutation({
    // TODO: Change any to the correct type
    mutationFn: async (data: any) => {
      // TODO: Implement API call
      console.log('Creating category', data);
      return true;
    },
    onSuccess: () => {
      toast.success('Category created successfully');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: () => {
      toast.error('Failed to create category');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      // TODO: Implement API call
      console.log('Deleting category with id', id);
      return true;
    },
    onSuccess: (_data, { id }) => {
      toast.success('Category deleted');
      queryClient.invalidateQueries({ queryKey: ['categories', { id }] });
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to delete category');
    },
  });

  const deleteInBulkMutation = useMutation({
    mutationFn: async ({ ids }: { ids: string[] }) => {
      // TODO: Implement API call
      console.log('Deleting categories', ids);
      return true;
    },
    onSuccess: () => {
      toast.success('Categories deleted');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to delete categories');
    },
  });

  return {
    isLoading: isLoading || createMutation.isPending || deleteMutation.isPending || deleteInBulkMutation.isPending,
    categories: categories ?? [],
    createCategory: createMutation.mutateAsync,
    deleteCategory: deleteMutation.mutateAsync,
    deleteCategories: deleteInBulkMutation.mutateAsync,
  };
}
