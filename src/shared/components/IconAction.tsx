import type { ReactNode } from "react";

export type IconActionProps = {
  children: ReactNode;
};

export function IconAction(props: IconActionProps) {
  const { children } = props;
  return (
    <div className="bg-black-5 p-p2 rounded-r2 cursor-pointer">{children}</div>
  );
}
