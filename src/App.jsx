import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';
import Youtube from "./components/Youtube";
import WhyCrafted from "./components/WhyCrafted";
import Faq from "./components/Faq";

function App() {
  return (
      <>
        <Header />
        <Hero />
        <Youtube/>
        <Courses />
        <WhyCrafted/>
        <Team />
        <Testimonials />
        <Faq/>
        <Footer />
      </>
  );
}

export default App;