import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqList = [
    {
        isActive: true,
        question: "What is Crafted?",
        answer:
            "Crafted is a personalized learning platform designed to help school students master academic subjects and modern skills through engaging, structured, and hands-on programs.",
    },
    {
        isActive: false,
        question: "Who can enroll in Crafted programs?",
        answer:
            "Our courses are curated for students from Class 8 to 12, as well as aspirants preparing for competitive exams like IIT-JEE and NEET. We also offer a strong foundation stream for early learners.",
    },
    {
        isActive: false,
        question: "What subjects are covered?",
        answer:
            "We offer a mix of academic and future-focused courses including Math, Science and Coding ",
    },
    {
        isActive: false,
        question: "Are the programs online or offline?",
        answer:
            "All our sessions are currently offered online to ensure flexible and accessible learning from the comfort of your home, with live classes and mentor support.",
    },
    {
        isActive: false,
        question: "How can I enroll or get more details?",
        answer:
            "Click the 'Join Crafted' button on the top right or message us on WhatsApp to get started. We'll guide you through the right track based on your class and goals.",
    },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className={`${isOpen ? "active" : ""} rounded-lg`}>
            <button
                type="button"
                className="w-full text-left flex justify-between my-2 shadow-md  font-baloo text-xl drop-shadow-2xl text-black items-center p-4 lg:p-6 hover:bg-orange-200 transition-colors rounded-lg"
                onClick={onToggle}
            >
                <span>{faq.question}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } p-4 lg:p-6 bg-white shadow dark:shadow-none dark:bg-[#1E2735] rounded-xl`}
            >
                <p className="opacity-50">{faq.answer}</p>
            </div>
        </div>
    );
};

FaqItem.propTypes = {
    faq: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};



const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default: first one open

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="ezy__faq8_k6LCwbWE py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-16 md:px-8 lg:px-28">
                <div className="grid grid-cols-12 justify-between gap-6">
                    <div className="col-span-12 md:col-span-5">
                        <h2 className="font-bold text-black text-4xl md:text-[45px] leading-none mb-6">
                            Frequently Asked<br/> <span className="text-orange-500">Questions</span>
                        </h2>
                        <p className="text-xl text-black opacity-70">
                            Got questions about your board exams or JEE/NEET prep? We’ve answered some of the most common doubts to help you get started with confidence at Crafted.
                        </p>
                        <button className="bg-transparent font-monospace border-2 border-black text-orange-500 hover:bg-orange-500 hover:text-black font-semibold rounded transition-colors duration-300 mt-6 lg:mt-12 px-7 py-3">
                            Let’s Connect
                        </button>
                    </div>
                    <div className="col-span-12 text-black text-lg md:col-span-6 md:col-start-7">
                        {faqList.map((faq, i) => (
                            <FaqItem
                                key={i}
                                faq={faq}
                                isOpen={openIndex === i}
                                onToggle={() => handleToggle(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Faq;