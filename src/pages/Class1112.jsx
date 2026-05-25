import React, { useState, useEffect } from 'react';
import { BookOpen, Video, Users, HelpCircle, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Class1112() {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const highlights = [
        { icon: <Video className="w-8 h-8 text-orange-500" />, title: "Live Classes", desc: "Interactive live sessions with top educators" },
        { icon: <BookOpen className="w-8 h-8 text-orange-500" />, title: "Study Material", desc: "Comprehensive notes and DPPs aligned with NCERT" },
        { icon: <HelpCircle className="w-8 h-8 text-orange-500" />, title: "24/7 Doubt Solving", desc: "Dedicated doubt clearance for every subject" },
        { icon: <Users className="w-8 h-8 text-orange-500" />, title: "Mentorship", desc: "Personalized guidance and performance tracking" },
    ];

    const syllabus = [
        { subject: "Physics", topics: "Mechanics, Electromagnetism, Optics, Modern Physics" },
        { subject: "Chemistry", topics: "Physical, Organic, and Inorganic Chemistry" },
        { subject: "Mathematics / Biology", topics: "Calculus, Algebra, Genetics, Human Physiology" },
        { subject: "English", topics: "Literature, Advanced Grammar, Writing Skills" }
    ];

    const faqs = [
        { q: "Are the classes live or recorded?", a: "The classes are live, but recordings of all sessions will be available in your dashboard." },
        { q: "What is the batch timing?", a: "Batches usually run in the evening after school hours. Exact timings will be shared upon enrollment." },
        { q: "Is the study material physical or digital?", a: "You will get digital copies (PDFs) immediately, and physical books can be ordered separately." },
        { q: "How can I book a free demo?", a: "Click the 'Book Free Demo' button at the top or bottom of this page to schedule a session." },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header onJoinClick={() => window.location.href = '/'} />

            {/* Hero Section */}
            <section className="bg-white pt-48 lg:pt-56 pb-16 px-6 relative overflow-hidden">
                <svg className="pulse-line absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none" viewBox="0 0 1440 320">
                    <rect width="100%" height="100%" fill="white" />
                    <path fill="none" stroke="orange" strokeWidth="1.5" d="M0,270 C320,290 1120,80 1440,250" />
                    <path fill="none" stroke="black" strokeWidth="0.8" d="M0,80 C400,180 1040,40 1440,120" />
                </svg>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="md:w-1/2 space-y-8">
                        <div className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-1.5 rounded-full text-sm font-baloo tracking-wide">
                            ⭐ Advanced Core Batch
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-black leading-tight drop-shadow-sm">
                            Class 11 & 12 <span className="text-orange-500">Board & Target</span> Batch
                        </h1>
                        <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                            Deep dive into core PCMB topics with exam-oriented teaching, rigorous practice, and regular doubt support.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-orange-600 transition shadow-lg hover:shadow-xl font-baloo flex items-center gap-2 group">
                                Enroll Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-white text-black border-2 border-black px-8 py-4 rounded-full font-semibold text-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition shadow-md hover:shadow-lg font-baloo">
                                Book Free Demo
                            </button>
                        </div>
                        <div className="flex items-center gap-8 pt-6 text-base font-semibold text-gray-800 font-baloo">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                                <span>Expert Faculty</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                                <span>300+ Hrs Live Classes</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center transform hover:scale-105 transition duration-500">
                        <img src="/images/12.jpg" alt="Class 11 and 12 Illustration" className="w-full max-w-lg rounded-3xl drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Course Highlights */}
            <section className="py-20 px-6 bg-gray-50 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-baloo text-center mb-16 text-black drop-shadow-sm">
                        What's included in the <span className="text-orange-500">Course?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="bg-orange-100 p-5 rounded-full mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold font-baloo mb-3 text-black">{item.title}</h3>
                                <p className="text-gray-600 text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Syllabus & Why Choose Us */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-baloo text-black drop-shadow-sm">
                            Comprehensive <span className="text-orange-500">Syllabus</span>
                        </h2>
                        <p className="text-gray-700 text-lg">
                            We cover every subject in rigorous detail to ensure maximum marks in board exams alongside competitive prep.
                        </p>
                        <ul className="space-y-4">
                            {syllabus.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
                                    <div className="mt-1">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl font-baloo text-black">{item.subject}</h4>
                                        <p className="text-base text-gray-600 mt-1">{item.topics}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 bg-orange-50 p-10 md:p-14 rounded-[3rem] border border-orange-100 text-center relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold font-baloo mb-6 text-black relative z-10">Why choose this batch?</h3>
                        <p className="text-gray-700 text-lg mb-8 relative z-10 leading-relaxed">
                            Classes 11 & 12 are the defining years of a student's career. We balance board exam writing practice with the objective approach needed for entrance exams.
                        </p>
                        <div className="inline-block p-6 bg-white rounded-3xl shadow-lg relative z-10 transform hover:scale-105 transition">
                            <p className="font-bold text-2xl text-orange-600 font-baloo">Dual Approach Strategy</p>
                            <p className="text-gray-500 mt-2">Boards + Entrances.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / Enrollment */}
            <section className="py-20 px-6 bg-black text-white text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2"></div>
                
                <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-baloo drop-shadow-md">Ready to start your journey?</h2>
                    <p className="text-gray-300 text-xl font-medium">
                        Get unlimited access to all premium features, live classes, and doubt solving sessions.
                    </p>
                    <div className="bg-gray-900/80 backdrop-blur-xl p-10 rounded-[3rem] inline-block w-full max-w-lg border border-gray-700 shadow-2xl transform hover:-translate-y-2 transition duration-300">
                        <div className="bg-orange-500 text-white font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-6 font-baloo tracking-wider uppercase">
                            Most Popular
                        </div>
                        <h3 className="text-3xl font-bold font-baloo mb-2">Full Year Program</h3>
                        <div className="flex justify-center items-end gap-3 mb-8">
                            <span className="text-5xl font-extrabold text-white">₹18,000</span>
                            <span className="text-gray-400 line-through text-xl font-medium mb-1">₹30,000</span>
                        </div>
                        <ul className="space-y-4 text-left mb-10 text-gray-200 text-lg">
                            <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-orange-500" /> All Subjects Covered</li>
                            <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-orange-500" /> 1-on-1 Mentorship & PTMs</li>
                            <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-orange-500" /> Regular Mock Tests & Analysis</li>
                        </ul>
                        <button className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-2xl hover:bg-orange-600 transition font-baloo shadow-lg hover:shadow-orange-500/30">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-baloo text-center mb-12 text-black">Frequently Asked <span className="text-orange-500">Questions</span></h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex justify-between items-center p-6 bg-white hover:bg-orange-50/50 transition"
                                >
                                    <span className="font-semibold text-lg text-left text-gray-800 font-baloo">{faq.q}</span>
                                    <ChevronDown className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 text-base bg-white">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}