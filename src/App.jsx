import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';
import Youtube from "./components/Youtube";
import Courses from "./components/Courses";
import WhyCrafted from "./components/WhyCrafted";
import Faq from "./components/Faq";
import CoursesPage from './pages/CoursesPage'; // newly created
import { useLocation } from 'react-router-dom';

function Home() {
    return (
        <>
            <Hero />
            <Youtube />
            <Courses />
            <WhyCrafted />
            <Team />
            <Testimonials />
            <Faq />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesPage />} />
            </Routes>
        </Router>
    );
}

export default App;