import { Header } from '@/components/header';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard')({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <Outlet />
      </main>

    </>
  );
}
