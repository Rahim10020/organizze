export type NavItemProps = {
  label: string;
  href: string;
  active?: boolean;
};

export function NavItem(props: NavItemProps) {
  const { label, href, active = false } = props;
  const baseStyles = "text-m20 relative";
  const activeStyles = active
    ? "text-black-80 after:absolute after:left-0 after:-bottom-[20px] after:h-[2px] after:bg-black-70 after:w-full"
    : "text-black-50 hover:text-black-80";
  const resultClass = [baseStyles, activeStyles].filter(Boolean).join(" ");

  return (
    <a href={href} className={resultClass}>
      {label}
    </a>
  );
}
