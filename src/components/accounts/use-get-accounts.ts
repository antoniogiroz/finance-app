import { allAccounts } from '@/data/accounts';
import { useQuery } from '@tanstack/react-query';

export function useGetAccounts() {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      return allAccounts;
    },
  });
}
