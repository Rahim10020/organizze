export type RightSidebarProps = {
  title: string;
};

const items = [
  "Daily use",
  "Messaging extras",
  "Extending Takopi",
  "Debugging and operations",
  "Not sure where to go?",
];

export function RightSidebar(props: RightSidebarProps) {
  const { title = "On this page" } = props;
  const baseClass = "text-r20 cursor-pointer text-nowrap";

  const activeItem = "Daily use";

  return (
    <aside>
      <h4 className="text-black-80 text-b18 mb-p2">{title}</h4>
      <ul className="flex flex-col gap-p4">
        {items.map((item) => {
          const isActive = item === activeItem;
          const activeClass = isActive
            ? "text-primary underline"
            : "text-black-80 hover:text-primary";
          const resultClass = [baseClass, activeClass]
            .filter(Boolean)
            .join(" ");
          return (
            <li key={item} className={resultClass}>
              {item}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
