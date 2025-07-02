const WhyCrafted = () => {
    return (
        <section className="bg-white mt-30 py-32  px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-baloo font-semibold text-gray-900 mb-16">Why Craft<span className="text-orange-500">ed.</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-5">
                    {/* Expert Tutors */}
                    <div className="mb-10">
                        <div className="flex mb-3 justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#FFA500" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-user-icon lucide-user">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </div>
                        <h3 className="mt-4 text-3xl text-gray-800">Expert Tutors</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            IITs, NITs, IISERs & more - Learn from those who’ve been there & done it.
                        </p>
                    </div>

                    {/* Customized Study Material */}
                    <div>
                        <div className="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#4B0082" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="lucide lucide-notebook-text-icon lucide-notebook-text">
                                <path d="M2 6h4"/>
                                <path d="M2 10h4"/>
                                <path d="M2 14h4"/>
                                <path d="M2 18h4"/>
                                <rect width="16" height="20" x="4" y="2" rx="2"/>
                                <path d="M9.5 8h5"/>
                                <path d="M9.5 12H16"/>
                                <path d="M9.5 16H14"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl text-gray-800">Customized Study Material</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            Topic-wise notes & problems tailored for school & entrance exams.
                        </p>
                    </div>

                    {/* Mentorship Support */}
                    <div>
                        <div className="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#008080" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles">
                                <path
                                    d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                                <path d="M20 3v4"/>
                                <path d="M22 5h-4"/>
                                <path d="M4 17v2"/>
                                <path d="M5 18H3"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl text-gray-800">Motivation & Mentorship</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            Success sessions with achievers to guide and inspire students.
                        </p>
                    </div>

                    {/* Crafted Website */}
                    <div>
                        <div className="mt-1 flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#1E90FF" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                                <rect width="7" height="9" x="3" y="3" rx="1"/>
                                <rect width="7" height="5" x="14" y="3" rx="1"/>
                                <rect width="7" height="9" x="14" y="12" rx="1"/>
                                <rect width="7" height="5" x="3" y="16" rx="1"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl text-gray-800">Crafted Website</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            Easy access to notes, schedules, progress, and session recordings.
                        </p>
                    </div>

                    {/* Live & Interactive Classes */}
                    <div>
                        <div className="flex justify-center mt-1 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#FF6347" stroke-width="2.1" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-video-icon lucide-video">
                                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
                                <rect x="2" y="6" width="14" height="12" rx="2"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl text-gray-800">Live & Interactive Classes</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            Real-time sessions with screen sharing, doubt-solving, and personalized attention.
                        </p>
                    </div>

                    {/* Flexible Scheduling */}
                    <div>
                        <div className="mt-1 flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                                 fill="none" stroke="#32CD32" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-clock8-icon lucide-clock-8">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 8 14"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl text-gray-800">Flexible Scheduling</h3>
                        <p className="text-[20px] text-gray-600 mt-4">
                            Your learning, your time - choose slots that fit your routine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCrafted;