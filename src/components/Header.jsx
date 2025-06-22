import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: for icons

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

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 shadow-md border-b border-white/20 backdrop-blur-md rounded-none p-4'
                    : 'bg-white p-6 mt-5'
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <img
                    src="/images/header-logo.svg"
                    alt="Crafted Logo"
                    className={`transition-all duration-300 ease-in-out ${
                        isScrolled ? 'h-12' : 'h-14'
                    } w-auto`}
                />

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <a href="#hero" className="text-gray-700 hover:text-orange-600">Home</a>
                    <a href="#courses" className="text-gray-700 hover:text-orange-600">Courses</a>
                    <a href="#team" className="text-gray-700 hover:text-orange-600">Our Team</a>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition">
                        Join Crafted
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 px-6 pb-4 space-y-4">
                    <a onClick={() => setIsMenuOpen(false)} href="#hero" className="block text-gray-700 hover:text-orange-600">Home</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#courses" className="block text-gray-700 hover:text-orange-600">Courses</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#team" className="block text-gray-700 hover:text-orange-600">Our Team</a>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition">
                        Join Crafted
                    </button>
                </div>
            )}
        </header>
    );
}
