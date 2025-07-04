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
        <section className="relative bg-white py-16 text-black overflow-hidden" id="testimonials">
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[-120px] right-[-350px] w-auto h-[600px] opacity-60 animate-pulse pointer-events-none"
            >
                <path
                    fill="#F1C21B"
                    d="M43,-18C48.1,1.8,39.5,22.1,23,34.8C6.6,47.4,-17.6,52.4,-38.5,40.2C-59.5,28,-77.2,-1.4,-70.2,-23.7C-63.3,-46,-31.6,-61.3,-6.4,-59.2C18.9,-57.1,37.8,-37.8,43,-18Z"
                    transform="translate(100 100)"
                />
            </svg>

            <svg
                className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="none"
                    stroke="orange"
                    strokeWidth="2"
                    d="M0,130 C300,100 1140,220 1440,300"
                />
                <path
                    fill="none"
                    stroke="grey"
                    strokeWidth="1.5"
                    d="M0,340 C400,180 1040,280 1440,220"
                />
            </svg>
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