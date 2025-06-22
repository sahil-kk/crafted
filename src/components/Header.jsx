import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Trigger when scrolled down just a bit
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300
    ${isScrolled
                ? 'bg-white/90 shadow-md border-b border-white/20 backdrop-blur-md rounded-none p-4'
                : 'bg-white p-6 mt-5'}
  `}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <img
                    src="/images/header-logo.svg"
                    alt="Crafted Logo"
                    className={`transition-all duration-300 ease-in-out ${
                        isScrolled ? 'h-12' : 'h-14'
                    } w-auto`}
                />
                <nav className="space-x-4">
                    <a href="#hero" className="text-gray-700 hover:text-orange-600">Home</a>
                    <a href="#courses" className="text-gray-700 hover:text-orange-600">Courses</a>
                    <a href="#team" className="text-gray-700 hover:text-orange-600">Our Team</a>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition">
                        <div className="font-bold ">Join Crafted</div>
                    </button>
                </nav>
            </div>
        </header>
    );
}