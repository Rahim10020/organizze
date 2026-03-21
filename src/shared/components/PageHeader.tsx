import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  children?: ReactNode;
};

export function PageHeader(props: PageHeaderProps) {
  const { title, children } = props;
  return (
    <div className="flex items-center justify-between">
      <h1>{title}</h1>
      <div className="flex items-center gap-p0-5">{children}</div>
    </div>
  );
}
