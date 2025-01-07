import { Toaster } from '@/components/ui/sonner';
import { SheetProvider } from '@/providers/sheet-provider';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <SheetProvider />
      <Toaster />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
