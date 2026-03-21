export type SidebarItemProps = {
  children: string;
  active?: boolean;
};

export function SidebarItem(props: SidebarItemProps) {
  const { children, active = false } = props;
  const baseClass =
    "text-r16 px-p4 py-p2 w-full flex items-start cursor-pointer";
  const conditionClass = active
    ? "text-primary bg-primary-5"
    : "text-black-80 hover:bg-black-5";
  const resultClass = [baseClass, conditionClass].filter(Boolean).join(" ");

  return <button className={resultClass}>{children}</button>;
}
