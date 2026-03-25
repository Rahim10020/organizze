export type NavItemProps = {
  label: string;
  href: string;
  active?: boolean;
};

export function NavItem(props: NavItemProps) {
  const { label, href, active = false } = props;
  const baseStyles = "text-r16 text-black-80";
  const activeStyles = active ? "border-b border-black-60" : "";
  const resultClass = [baseStyles, activeStyles].filter(Boolean).join(" ");

  return (
    <a href={href} className={resultClass}>
      {label}
    </a>
  );
}
