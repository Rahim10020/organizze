import { SearchIcon } from "../icons/SearchIcon";

export type SearchProps = {
  placeholder?: string;
  className?: string;
};

export function Search(props: SearchProps) {
  const { placeholder = "Search", className } = props;
  const baseClasses =
    "flex items-center justify-between bg-black-5 py-p2 px-p4 rounded-r2";
  const allClasses = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={allClasses}>
      <div className="flex items-center gap-p1">
        <SearchIcon className="w-4 h-4 text-" />
        <span className="text-r16 text-black-70">{placeholder}</span>
      </div>
      <div className="flex items-center justify-center p-p2 bg-white rounded-r2">
        <kbd className="text-r14 text-black-70">Ctrl K</kbd>
      </div>
    </div>
  );
}
