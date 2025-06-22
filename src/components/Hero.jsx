import { useState, useEffect } from 'react';

const images = [
    '/images/hero-bg.png',
    '/images/herobestkid.png',
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="bg-white border border-red-500 my-20 py-40 px-6">
            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="md:w-1/2 text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        <div className="leading-snug">Learn from the</div>
                        <div className="leading-snug">people who've been</div>
                        <div className="leading-snug">
                            there and <span className="text-orange-500">done it.</span>
                        </div>
                    </h1>
                    <p className="text-gray-700 text-lg max-w-md">
                        Presenting to you the best online learning platform your child will ever need to fully invest in their learning journey
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 hover:text-[17px] transition">
                        <div className="font-bold ">Book Free Demo</div>
                    </button>
                </div>

                {/* Right Image with Fade Transition */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <div className="w-full h-[400px] flex items-center justify-center">
                    <img
                        key={currentImageIndex} // forces re-animation on change
                        src={images[currentImageIndex]}
                        alt="Hero Slide"

                    />
                     </div>
                </div>
            </div>
        </section>

    );
}