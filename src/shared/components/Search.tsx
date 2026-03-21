import { SearchIcon } from "../icons/SearchIcon";

export type SearchProps = {
  placeholder?: string;
  className?: string;
};

export function Search(props: SearchProps) {
  const { placeholder = "Search", className } = props;
  const baseClasses =
    "flex items-center justify-between bg-black-5 py-p1 px-p4 rounded-r2 hover:cursor-pointer";
  const allClasses = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={allClasses}>
      <div className="flex items-center gap-p1">
        <SearchIcon className="w-5 h-5 text-black-60" />
        <span className="text-r18 text-black-70">{placeholder}</span>
      </div>
      <div className="flex items-center justify-center p-p2 bg-white-60 rounded-r2">
        <kbd className="text-r14 text-black-70">Ctrl K</kbd>
      </div>
    </div>
  );
}
