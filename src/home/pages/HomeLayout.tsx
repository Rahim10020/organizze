import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { Footer } from "../components/Footer";

export type HomeLayoutProps = {
  children: ReactNode;
};

export function HomeLayout(props: HomeLayoutProps) {
  const { children } = props;

  return (
    <div className="min-h-screen bg-white text-black-80">
      <Header />
      <div className="mx-auto max-w-5xl px-p4 lg:px-p8 ">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_240px] gap-p3 lg:gap-p4">
          <aside className="hidden lg:block sticky top-p6 overflow-y-auto">
            <LeftSidebar />
          </aside>
          <main className="min-w-0 max-w-none">{children}</main>
          <aside className="hidden lg:block top-p6 overflow-y-auto">
            <RightSidebar title="On this page" />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
