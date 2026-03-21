import { type ReactNode } from "react";

export type DocLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function DocLink(props: DocLinkProps) {
  const { href, children, className = "hover:underline text-primary" } = props;
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
