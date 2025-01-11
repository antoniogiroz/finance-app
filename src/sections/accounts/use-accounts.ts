import { allAccounts } from '@/data/accounts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useAccounts() {
  const queryClient = useQueryClient();

  const { data: accounts, isLoading } = useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      return allAccounts;
    },
  });

  const createMutation = useMutation({
    // TODO: Change any to the correct type
    mutationFn: async (data: any) => {
      // TODO: Implement API call
      console.log('Creating account', data);
      return true;
    },
    onSuccess: () => {
      toast.success('Account created successfully');
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
    onError: () => {
      toast.error('Failed to create account');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      // TODO: Implement API call
      console.log('Deleting account with id', id);
      return true;
    },
    onSuccess: (_data, { id }) => {
      toast.success('Account deleted');
      queryClient.invalidateQueries({ queryKey: ['account', { id }] });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to delete account');
    },
  });

  const deleteInBulkMutation = useMutation({
    mutationFn: async ({ ids }: { ids: string[] }) => {
      // TODO: Implement API call
      console.log('Deleting accounts', ids);
      return true;
    },
    onSuccess: () => {
      toast.success('Accounts deleted');
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to delete accounts');
    },
  });

  return {
    isLoading: isLoading || createMutation.isPending || deleteMutation.isPending || deleteInBulkMutation.isPending,
    accounts: accounts ?? [],
    createAccount: createMutation.mutateAsync,
    deleteAccount: deleteMutation.mutateAsync,
    deleteAccounts: deleteInBulkMutation.mutateAsync,
  };
}
