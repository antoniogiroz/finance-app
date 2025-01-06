import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeaderLogo } from './header-logo';
import { Navigation } from './navigation';
import { WelcomeMessage } from './welcome-message';

export function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-36 lg:px-14">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/520071?v=4" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
        </div>

        <WelcomeMessage />
      </div>
    </header>
  );
}
