import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToHero = () => {
        if (location.pathname === '/') {
            const el = document.getElementById('hero');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            localStorage.setItem('scrollTarget', 'hero');
            navigate('/');
        }
    };
    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? ' shadow-md p-4 bg-white/70 backdrop-blur-md' : 'bg-white p-6 mt-5'
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">



                <button onClick={handleScrollToHero}>
                    <img
                        src="/images/header-logo.svg"
                        alt="Crafted Logo"
                        className={`transition-all ${isScrolled ? 'h-12' : 'h-14'} w-auto`}
                    />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden font-baloo text-xl md:flex space-x-6 items-center">
                    <button
                        onClick={handleScrollToHero}
                        className="text-gray-700 hover:text-orange-600"
                    >
                        Home
                    </button>
                    <a href="#courses" className="text-gray-700 hover:text-orange-600">Courses</a>
                    <a href="#team" className="text-gray-700 hover:text-orange-600">Our Team</a>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition">
                        Join Crafted
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 px-6 pb-4 space-y-4">
                    <button
                        onClick={() => {
                            handleScrollToHero();
                            setIsMenuOpen(false);
                        }}
                        className="text-gray-700 hover:text-orange-600"
                    >
                        Home
                    </button>
                    <Link onClick={() => setIsMenuOpen(false)} to="/courses" className="block text-gray-700 hover:text-orange-600">Courses</Link>
                    <a onClick={() => setIsMenuOpen(false)} href="#team" className="block text-gray-700 hover:text-orange-600">Our Team</a>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition">
                        Join Crafted
                    </button>
                </div>
            )}
        </header>
    );
}