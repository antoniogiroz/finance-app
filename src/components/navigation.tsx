import type { FileRoutesByTo } from '@/routeTree.gen';
import { useRouter, useRouterState } from '@tanstack/react-router';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { NavButton } from './nav-button';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const routes: { to: keyof FileRoutesByTo; label: string }[] = [
  { to: '/', label: 'Overview' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/accounts', label: 'Accounts' },
  { to: '/categories', label: 'Categories' },
  { to: '/settings', label: 'Settings' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useRouter();
  const { location } = useRouterState();

  const isMobile = useMedia('(max-width: 1023px)', false);

  function handleClick(to: keyof FileRoutesByTo) {
    navigate({ to });
    setIsOpen(false);
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20
          hover:text-white border-none focus-visible:ring-offset-0
          focus-visible:ring-transparent outline-none text-white
          focus:bg-white/30 transition"
          >
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation menu</SheetTitle>
            <SheetDescription>Navigation menu.</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map(({ to, label }) => (
              <Button
                key={to}
                variant={to === location.pathname ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => handleClick(to)}
              >
                {label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map(({ to, label }) => (
        <NavButton key={to} to={to} label={label} />
      ))}
    </div>
  );
}
