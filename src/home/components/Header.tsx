import { Logo } from "../../shared/components/Logo";
import { NavItem } from "../../shared/components/NavItem";
import { Search } from "../../shared/components/Search";
import { UserMeta } from "../../shared/components/UserMeta";
import { SunIcon } from "../../shared/icons/SunIcon";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Tutorials", href: "#", active: false },
  { label: "How-to", href: "#", active: false },
  { label: "Reference", href: "#", active: false },
  { label: "Explanation", href: "#", active: false },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black-5 bg-white px-p4 lg:px-p8 py-p4">
      <div className="mx-auto max-w-7xl w-full">
        {/* first line */}
        <div className="flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-p8">
            <div className="flex items-center gap-p4">
              <SunIcon className="w-5 h-5 hover:cursor-pointer text-black-60" />
              <Search className="w-40" />
            </div>
            <UserMeta />
          </div>
        </div>
        {/* second line */}
        <nav className="pt-p6">
          <ul className="flex items-center gap-p8 ">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavItem
                  label={item.label}
                  href={item.href}
                  active={item.active}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
