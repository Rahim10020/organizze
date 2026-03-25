import { DocLink } from "../../shared/components/DocLink";
import { IconAction } from "../../shared/components/IconAction";
import { PageHeader } from "../../shared/components/PageHeader";
import { Section } from "../../shared/components/Section";
import { FileCodeIcon } from "../../shared/icons/FileCodeIcon";
import { FileEditIcon } from "../../shared/icons/FileEditIcon";

export function HomePage() {
  return (
    <main className="mx-p8">
      <PageHeader title="How-to-guides" className="mb-p6">
        <IconAction>
          <FileEditIcon className="w-5 h-5 text-black-40 hover:text-primary" />
        </IconAction>
        <IconAction>
          <FileCodeIcon className="w-5 h-5 text-black-40 hover:text-primary" />
        </IconAction>
      </PageHeader>
      <div className="mb-p6 text-r20 tracking-wide text-black-80">
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
        <div className="mb-p6 text-r20 tracking-wide text-black-80">
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
      <Section title="How are you">
        <div className="mb-p6 text-r20 tracking-wide text-black-80">
          <p>
            How-to guides are goal-oriented{" "}
            <span className="text-b20">recipes</span>. Pick the task you&apos;re
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
      <Section title="Break the laws">
        <div className="mb-p6 text-r20 tracking-wide text-black-80">
          <p>
            How-to guides are goal-oriented{" "}
            <span className="text-b20">recipes</span>. Pick the task you&apos;re
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
      <Section title="Learn through failures">
        <div className="mb-p6 text-r20 tracking-wide text-black-80">
          <p>
            Learn guides are goal-oriented{" "}
            <span className="text-b20">recipes</span>. Pick the task you&apos;re
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
