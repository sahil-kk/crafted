import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Ritvik Sharma",
        role: "Class 12 – NEET Aspirant",
        text: "Crafted made NEET Biology so simple to understand. The daily targets and concept videos really boosted my confidence.",
    },
    {
        name: "Ishaan Mehta",
        role: "Class 12 – JEE Aspirant",
        text: "From DPPs to mock tests, Crafted’s JEE prep system helped me improve speed, accuracy, and rank over time.",
    },
    {
        name: "Meera Reddy",
        role: "Class 11 Student",
        text: "The transition from Class 10 to 11 felt smooth with Crafted’s structured lessons and doubt-solving support.",
    },
    {
        name: "Tanisha Verma",
        role: "Foundation Track (8–10)",
        text: "Joining early was the best decision! Crafted helped me build strong basics in Math and Science step by step.",
    },
    {
        name: "Aarav Nair",
        role: "Class 10 Student",
        text: "The board-focused modules and weekly assessments kept me consistent without stressing me out.",
    },
    {
        name: "Saanvi Rao",
        role: "Class 8 Student",
        text: "I actually enjoy learning now! Crafted uses visuals and real-life examples that make Science fun and easy.",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [cardsToShow, setCardsToShow] = useState(3);
    const intervalRef = useRef(null);

    const extendedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(window.innerWidth < 768 ? 1 : 3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(intervalRef.current);
    }, [cardsToShow]);

    const startAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= testimonials.length) {
                    setTimeout(() => {
                        setIsTransitioning(false);
                        setCurrentIndex(0);
                    }, 500);
                }
                return nextIndex;
            });
        }, 3000);
    };

    return (
        <section className="bg-white py-16 text-black">
            <h2 className="text-5xl font-baloo text-center font-semibold mb-24">
                <span className="text-orange-500">Student</span><br />Success Stories
            </h2>

            <div className="overflow-hidden max-w-7xl mx-auto px-4">
                <div
                    className={`flex transition-transform duration-1000 ease-in-out ${
                        isTransitioning ? "transition-transform" : "transition-none"
                    }`}
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {extendedTestimonials.map((t, index) => (
                        <div
                            key={index}
                            className={`${
                                cardsToShow === 3 ? "md:w-1/3" : "w-full"
                            } px-2 py-4 flex-shrink-0`}
                        >
                            <div className="bg-white rounded-xl mx-4 p-6 border-2 h-[420px] flex flex-col justify-between shadow-md">
                                <div className="text-orange-500 text-left text-6xl mb-3">“</div>
                                <p className="mb-4 text-lg">“{t.text}”</p>
                                <div className="mt-auto border-t pt-4 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-semibold">{t.name}</h4>
                                        <span className="text-sm text-gray-600">{t.role}</span>
                                    </div>
                                    <span className="text-orange-500 text-sm">★★★★★</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;