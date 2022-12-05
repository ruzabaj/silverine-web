import Header from "./components/header";
import Blog from "./components/Sections/blog";
import Image from "./components/Sections/image";
import Contact from "./components/Sections/contact";
import Footer from "./components/footer";
import Page from "./components/Sections/page";

function App() {
  return (
    <div className="App">
      <Header/>
      <Image />
      <Blog/>
      <Page/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
