import { Header } from "./home/components/Header";
import { LeftSidebar } from "./home/components/LeftSidebar";
import { PageHeader } from "./shared/components/PageHeader";
import { Section } from "./shared/components/Section";
import { FileCodeIcon } from "./shared/icons/FileCodeIcon";
import { FileEditIcon } from "./shared/icons/FileEditIcon";

function App() {
  return (
    <>
      <Header />

      <Section title="Notre avenir">
        <p>
          Je ne sais toujours pas comment faire tourner le ballon de basket sur
          mon doigt
        </p>
      </Section>
      <PageHeader title="Takopi Documentation">
        <FileCodeIcon className="w-5 h-5" />
        <FileEditIcon className="w-5 h-5" />
      </PageHeader>
      <LeftSidebar />
    </>
  );
}

export default App;
