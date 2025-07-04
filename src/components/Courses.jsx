import React from "react";

const courses = [
    {
        title: "Class 8 & 9",
        desc: "Master HTML, CSS, JavaScript and React to build stunning UIs.",
        image: "/images/89.svg"
    },
    {
        title: "Class 10",
        desc: "Learn Node.js, Express, MongoDB, and API development.",
        image: "images/10.png"
    },
    {
        title: "Class 11 & 12",
        desc: "Design sleek interfaces with Figma, Adobe XD and UX principles.",
        image: "images/12.jpg"
    },
    {
        title: "Foundation",
        desc: "Understand core concepts of algorithms and data structures.",
        image: "images/fd.png"
    },
    {
        title: "IIT/AIIMS ",
        desc: "Explore supervised, unsupervised learning, and Python ML libraries.",
        image: "/images/iitaiims.jpg"
    }
];

const Courses = () => {
    return (
        <section className="relative py-16 bg-white scroll-mt-12 overflow-hidden" id="courses">

            {/* Background curved lines */}
            <svg
                className="pulse-line"
                className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
                viewBox="0 0 1440 320"

            >
                <rect width="100%" height="100%" fill="white" />
                <path
                    className="pulse-line"

                    fill="none"
                    stroke="orange"
                    strokeWidth="1.5"
                    d="M0,270 C320,290 1120,80 1440,250"
                />
                <path

                    fill="none"
                    stroke="black"
                    strokeWidth="0.8"
                    d="M0,80 C400,180 1040,40 1440,120"
                />
            </svg>

            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-semibold text-black text-center mb-8 font-baloo">Our<span className="text-orange-600 "> Courses</span></h2>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`w-full sm:w-[45%] lg:w-[30%] flex justify-center`}
                        >
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CourseCard = ({ course }) => (
    <div className="bg-white rounded-2xl drop-shadow-lg w-full max-w-sm transform hover:scale-110 transition-transform duration-300">

        <img src={course.image} alt={course.title} className="w-full h-56 object-cover rounded-t-2xl" />
        <div className="p-4 text-center  font-baloo">
           <div className="font-semibold"> <h3 className="text-3xl font-semibold text-gray-800">{course.title}</h3></div>
            <p className="text-md text-gray-600 mt-2">{course.desc}</p>
            <button className="mt-4 px-4 py-2 border-2 border-black text-black bg-transparent text-lg rounded-xl hover:scale-105 hover:!border-white hover:!bg-orange-500 hover:!text-white transition duration-300">
                Learn More
            </button>
        </div>
    </div>
);

export default Courses;

