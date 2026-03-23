import { DocLink } from "../../shared/components/DocLink";
import { PageHeader } from "../../shared/components/PageHeader";
import { Section } from "../../shared/components/Section";
import { FileCodeIcon } from "../../shared/icons/FileCodeIcon";
import { FileEditIcon } from "../../shared/icons/FileEditIcon";

export function HomePage() {
  return (
    <main>
      <PageHeader title="How-to-guides" className="mb-p6">
        <FileEditIcon className="w-5 h-5 text-black-40 cursor-pointer" />
        <FileCodeIcon className="w-5 h-5 text-black-40 cursor-pointer" />
      </PageHeader>
      <div className="mb-p6 text-r18 text-black-80">
        <p>
          How-to guides are goal-oriented recipes. Pick the task you&apos;re
          trying to accomplish and follow the steps.
        </p>
        <p>
          If you&apos;re learning from scratch, start with{" "}
          <DocLink href="#">Tutorials</DocLink>
        </p>
        <p>
          If you need exact options and defaults, use{" "}
          <DocLink href="#">Reference</DocLink>
        </p>
      </div>
      <Section title="Daily use">
        <div className="mb-p6 text-r18 text-black-80">
          <p>
            How-to guides are goal-oriented recipes. Pick the task you&apos;re
            trying to accomplish and follow the steps.
          </p>
          <p>
            If you&apos;re learning from scratch, start with{" "}
            <DocLink href="#">Tutorials</DocLink>
          </p>
          <p>
            If you need exact options and defaults, use{" "}
            <DocLink href="#">Reference</DocLink>
          </p>
        </div>
      </Section>
    </main>
  );
}
