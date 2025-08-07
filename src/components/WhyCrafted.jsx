import React from "react";

const WhyCrafted = () => {
    return (
        <section className="bg-gradient-to-br from-white via-white to-teal-50 mt-24 py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto font-baloo text-center">
                <h2 className="text-5xl sm:text-4xl md:text-5xl font-baloo font-semibold text-gray-900 mb-10">
                    Why Craft<span className="text-orange-500">ed.</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                    {/* 1. Expert Tutors */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Expert Tutors</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            IITs, NITs, IISERs & more — Learn from those who’ve been there & done it.
                        </p>
                    </div>

                    {/* 2. Customized Study Material */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#4B0082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 6h4" />
                                <path d="M2 10h4" />
                                <path d="M2 14h4" />
                                <path d="M2 18h4" />
                                <rect width="16" height="20" x="4" y="2" rx="2" />
                                <path d="M9.5 8h5" />
                                <path d="M9.5 12H16" />
                                <path d="M9.5 16H14" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Customized Study Material</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            Topic-wise notes & problems tailored for school & entrance exams.
                        </p>
                    </div>

                    {/* 3. Mentorship Support */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                                <path d="M20 3v4" />
                                <path d="M22 5h-4" />
                                <path d="M4 17v2" />
                                <path d="M5 18H3" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Motivation & Mentorship</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            Success sessions with achievers to guide and inspire students.
                        </p>
                    </div>

                    {/* 4. Crafted Website */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="7" height="9" x="3" y="3" rx="1" />
                                <rect width="7" height="5" x="14" y="3" rx="1" />
                                <rect width="7" height="9" x="14" y="12" rx="1" />
                                <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Crafted Website</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            Easy access to notes, schedules, progress, and session recordings.
                        </p>
                    </div>

                    {/* 5. Live & Interactive Classes */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#FF6347" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                                <rect x="2" y="6" width="14" height="12" rx="2" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Live & Interactive Classes</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            Real-time sessions with screen sharing, doubt-solving, and personalized attention.
                        </p>
                    </div>

                    {/* 6. Flexible Scheduling */}
                    <div className="hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="#32CD32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 8 14" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl text-gray-800">Flexible Scheduling</h3>
                        <p className="text-lg sm:text-lg text-gray-600 mt-2">
                            Your learning, your time — choose slots that fit your routine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCrafted;