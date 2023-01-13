import { Box } from "@chakra-ui/react";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer";
import { MyGithubCalender } from "./components/github/MyGithubCalender";
import { MyGithubStats } from "./components/github/MyGithubStats";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { TeckStacks } from "./components/teckStacks/TeckStacks";

function App() {
  return (
    <Box w="100%" h="auto" minWidth="250px">
      <Navbar />
      <About />
      <TeckStacks />
      <MyGithubStats />
      <MyGithubCalender />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
