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
  return (
    <aside>
      <h4 className="text-black-80 text-b18">{title}</h4>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="text-r18 text-black-80 hover:text-primary cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
