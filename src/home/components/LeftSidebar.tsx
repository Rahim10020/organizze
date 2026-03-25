import { SidebarItem } from "../../shared/components/SidebarItem";

const items = [
  "Overview",
  "Switch engines",
  "Projects",
  "Worktrees",
  "Route by chat",
  "Topics",
  "Voice notes",
  "File transfer",
  "Schedule tasks",
  "Add a runner",
];

export function LeftSidebar() {
  return (
    <aside>
      <ul className="flex flex-col gap-p4">
        {items.map((label) => (
          <SidebarItem
            key={label}
            label={label}
            active={label === "Overview"}
          />
        ))}
      </ul>
    </aside>
  );
}
