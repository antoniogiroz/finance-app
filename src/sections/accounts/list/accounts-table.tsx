import { DataTable } from '@/components/data-table';
import { useAccounts } from '../use-accounts';
import { columns } from './accounts-table-columns';

export function AccountsTable() {
  const { accounts, isLoading, deleteAccounts } = useAccounts();

  return (
    <DataTable
      filterKey="name"
      columns={columns}
      data={accounts}
      onDelete={(row) => {
        const ids = row.map(r => r.original.id);
        deleteAccounts({ ids });
      }}
      disabled={isLoading}
    />
  );
}
