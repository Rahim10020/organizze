import { DocLink } from "./shared/components/DocLink";
import { Logo } from "./shared/components/Logo";
import { Section } from "./shared/components/Section";
import { UserMeta } from "./shared/components/UserMeta";

function App() {
  return (
    <>
      <Logo />
      <UserMeta />
      <DocLink href="#">Moi</DocLink>
      <Section title="Notre avenir">
        <p>
          Je ne sais toujours pas comment faire tourner le ballon de basket sur
          mon doigt
        </p>
      </Section>
    </>
  );
}

export default App;
