import type { FileRoutesByFullPath } from '@/routeTree.gen';
import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

interface Props {
  to: keyof FileRoutesByFullPath;
  label: string;
}

export function NavButton({ to, label }: Props) {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className="w-full lg:w-auto justify-between font-normal
       hover:bg-white/20 hover:text-white border-none
       focus-visible:ring-offset-0 focus-visible:ring-transparent
       outline-none text-white focus:bg-white/30 transition bg-transparent
       [&.active]:bg-white/20 [&.active]:text-white"
    >
      <Link to={to}>{label}</Link>
    </Button>
  );
}
