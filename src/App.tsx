import { DocLink } from "./shared/components/DocLink";
import { Logo } from "./shared/components/Logo";
import { UserMeta } from "./shared/components/UserMeta";

function App() {
  return (
    <>
      <Logo />
      <UserMeta />
      <DocLink href="#">Moi</DocLink>
    </>
  );
}

export default App;
