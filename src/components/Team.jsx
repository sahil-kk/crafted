import { useEffect, useRef, useState } from "react";

const Team = () => {
    const [facultyData, setFacultyData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [cardsToShow, setCardsToShow] = useState(4);
    const intervalRef = useRef(null);

    // 👇 Fetch data from Django REST API
    useEffect(() => {
        fetch("https://crafted-backend-p7es.onrender.com/api/faculties/") // Replace with your actual endpoint
            .then((res) => res.json())
            .then((data) => setFacultyData(data))
            .catch((err) => console.error("Error fetching faculty data:", err));
    }, []);

    const extendedFacultyData = [...facultyData, ...facultyData];

    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(window.innerWidth < 768 ? 2 : 4);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => intervalRef.current && clearInterval(intervalRef.current);
    }, [cardsToShow, facultyData]);

    const startAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(next, 2500);
    };

    const next = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= facultyData.length) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(0);
                }, 500);
            }
            return nextIndex;
        });
        restartAutoScroll();
    };

    const prev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
            const prevIndexCalc = prevIndex - 1;
            if (prevIndexCalc < 0) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(facultyData.length - cardsToShow);
                }, 500);
                return extendedFacultyData.length - cardsToShow;
            }
            return prevIndexCalc;
        });
        restartAutoScroll();
    };

    const restartAutoScroll = () => startAutoScroll();

    return (
        <div className="relative  bg-white min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto relative">
                <h1 id="team" className="text-5xl scroll-mt-36 font-semibold font-baloo text-center mb-8 text-gray-800">
                    Meet our Faculties
                </h1>

                {/* Arrows */}
                <div className="absolute bottom-4 left-1/2 transform translate-y-[90px] -translate-x-1/2 flex gap-4 z-10">
                    <button
                        onClick={prev}
                        className="border border-gray-700 p-2 rounded-full hover:bg-black hover:text-white transition"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="border border-gray-700 p-2 rounded-full hover:bg-black hover:text-white transition"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden relative">
                    <div
                        className={`flex transition-transform duration-1000 ease-in-out ${
                            isTransitioning ? "transition-transform" : "transition-none"
                        }`}
                        style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                    >
                        {extendedFacultyData.map((faculty, index) => (
                            <div
                                key={index}
                                className={`${
                                    cardsToShow === 4 ? "md:w-1/4" : "w-1/2"
                                } w-1/2 px-2 py-10 flex-shrink-0`}
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full">
                                    <img
                                        src={faculty.image_url}
                                        alt={faculty.name}
                                        className="w-full h-76 object-cover"
                                    />
                                    <div className="text-center p-4">
                                        <h2 className="text-[26px] font-semibold text-gray-800">{faculty.name}</h2>
                                        <p className="text-m text-orange-600 mt-1">{faculty.subject}</p>
                                        <p className="text-m text-gray-500 mt-1">{faculty.college}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;