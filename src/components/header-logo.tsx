import { Link } from '@tanstack/react-router';

export function HeaderLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="items-center hidden lg:flex">
        <img src="/logo.svg" alt="Logo" width={28} height={28} />
        <p className="font-semibold text-white text-2xl ml-2.5"></p>
      </div>
    </Link>
  );
}
