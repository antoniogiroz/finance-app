import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <Outlet />
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <img src="/logo.svg" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
}
