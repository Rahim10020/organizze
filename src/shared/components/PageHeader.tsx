import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  className?: string;
  children?: ReactNode;
};

export function PageHeader(props: PageHeaderProps) {
  const { title, children, className } = props;
  const baseClass = "flex items-center justify-between";
  const resultClass = [baseClass, className].filter(Boolean).join(" ");
  return (
    <div className={resultClass}>
      <h1 className="text-b24 text-black-80">{title}</h1>
      <div className="flex items-center gap-p0-5">{children}</div>
    </div>
  );
}
