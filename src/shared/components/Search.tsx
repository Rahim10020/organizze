import { SearchIcon } from "../icons/SearchIcon";

export type SearchProps = {
  placeholder?: string;
  className?: string;
};

export function Search(props: SearchProps) {
  const { placeholder = "Search", className } = props;
  const baseClasses =
    "flex items-center justify-between bg-black-5 p-p1 rounded-r1";
  const allClasses = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={allClasses}>
      <div className="flex items-center gap-p1">
        <SearchIcon className="w-5 h-5" />
        <span>{placeholder}</span>
      </div>
      <div className="flex items-center justify-center p-p0-5 bg-white rounded-r1">
        <kbd>Ctrl K</kbd>
      </div>
    </div>
  );
}
