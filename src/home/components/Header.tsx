import { Logo } from "../../shared/components/Logo";
import { Search } from "../../shared/components/Search";
import { UserMeta } from "../../shared/components/UserMeta";
import { SunIcon } from "../../shared/icons/SunIcon";

export function Header() {
  return (
    <header className="mx-auto max-w-5xl px-p4 lg:px-p8 py-p6">
      <div className="flex items-center justify-between ">
        <Logo size="sm" />
        <div className="flex items-center gap-p8">
          <div className="flex items-center gap-p4">
            <SunIcon className="w-5 h-5 hover:cursor-pointer text-black-60" />
            <Search className="w-40" />
          </div>
          <UserMeta />
        </div>
      </div>
    </header>
  );
}
