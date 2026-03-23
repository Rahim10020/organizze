import { Footer } from "./home/components/Footer";
import { Header } from "./home/components/Header";
import { LeftSidebar } from "./home/components/LeftSidebar";
import { RightSidebar } from "./home/components/RightSidebar";
import { HomePage } from "./home/pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <LeftSidebar />
      <RightSidebar title="On this page" />
      <Footer />
    </>
  );
}

export default App;
