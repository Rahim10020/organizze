import { Logo } from "../../shared/components/Logo";
import { Search } from "../../shared/components/Search";
import { UserMeta } from "../../shared/components/UserMeta";
import { SunIcon } from "../../shared/icons/SunIcon";

export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto">
      <Logo />
      <div className="flex items-center">
        <div className="flex items-center">
          <SunIcon className="w-5 h-5" />
          <Search className="w-50" />
        </div>
        <UserMeta />
      </div>
    </header>
  );
}
