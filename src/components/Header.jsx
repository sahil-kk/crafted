import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onJoinClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id) => {
        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 z-20 w-full transition-all duration-300 ${isScrolled ? 'shadow-md p-4 bg-white/70 backdrop-blur-md' : 'bg-white p-6 mt-5'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <button onClick={() => handleScrollTo('hero')}>
                    <img
                        src="/images/craftedlonglogo.svg"
                        alt="Crafted Logo"
                        className={`transition-all ${isScrolled ? 'h-12' : 'h-14'} w-auto`}
                    />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden font-baloo text-xl md:flex space-x-6 items-center">
                    <button onClick={() => handleScrollTo('hero')} className="text-gray-700 hover:text-orange-600">Home</button>
                    <button onClick={() => handleScrollTo('courses')} className="text-gray-700 hover:text-orange-600">Courses</button>
                    <button onClick={() => handleScrollTo('team')} className="text-gray-700 hover:text-orange-600">Our Team</button>
                    <button
                        onClick={onJoinClick}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition"
                    >
                        Join Crafted
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-center md:text-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden text-center mt-4 px-6 pb-4 space-y-4">
                    <button onClick={() => handleScrollTo('hero')} className="block w-full text-gray-700 hover:text-orange-600">Home</button>
                    <button onClick={() => handleScrollTo('courses')} className="block w-full text-gray-700 hover:text-orange-600">Courses</button>
                    <button onClick={() => handleScrollTo('team')} className="block w-full text-gray-700 hover:text-orange-600">Our Team</button>
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            onJoinClick();
                        }}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition"
                    >
                        Join Crafted
                    </button>
                </div>
            )}
        </header>
    );
}