import type { ReactNode } from "react";

// h2 + content
export type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section(props: SectionProps) {
  const { title, children, id } = props;
  return (
    <section id={id} className="">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
