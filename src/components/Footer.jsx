const Footer = () => {
    return (
        <section className="bg-white text-black mt-16 mb-16">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 text-center">

                {/* 1. Logo & Tagline */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/header-logo.svg"
                        alt="Crafted Logo"
                        className="h-10 mb-3"
                    />
                    <p className="text-lg text-gray-600">
                        Crafted supports students from Classes 8 to 12 with structured prep for boards, JEE, NEET, and foundations. With expert guidance and smart tools, students learn better, stay consistent, and achieve more.
                    </p>
                </div>

                {/* 2. Explore */}
                <div className="flex flex-col items-center">
                    <h4 className="text-2xl text-orange-500 font-semibold mb-4">Explore</h4>
                    <div className="flex flex-col gap-3 font-semibold font-baloo text-xl">
                        <a href="#courses" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">Courses</a>
                        <a href="#team" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">Our Team</a>
                        <a href="#contact" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">Contact Us</a>
                    </div>
                </div>

                {/* 3. Support */}
                <div className="flex flex-col items-center">
                    <h4 className="text-2xl text-orange-500 font-semibold mb-4">Support</h4>
                    <div className="flex flex-col gap-3 font-semibold font-baloo text-xl">
                        <a href="/privacy" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">Privacy Policy</a>
                        <a href="/terms" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">Terms & Conditions</a>
                        <a href="/faq" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">FAQs</a>
                    </div>
                </div>

                {/* 4. Follow Us */}
                <div className="flex flex-col items-center">
                    <h4 className="text-2xl text-orange-500 font-semibold mb-4">Follow Us</h4>

                    <div className="flex justify-center gap-3 mb-4">
                        <a href="https://www.instagram.com/crafted.learninghub?igsh=bms4N2oxNHYyYXdn" target="_blank" rel="noopener noreferrer">
                            <img src="/images/ig.svg" alt="Instagram" className="w-10 h-10 opacity-50 hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/company/crafted-learning-hub/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-10 h-10 opacity-50 hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/images/youtube.svg" alt="YouTube" className="w-10 h-10 opacity-50 hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a href="https://www.facebook.com/people/CraftedLearningHub/61576321487598/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/fb.svg" alt="Facebook" className="w-10 h-10 opacity-50 hover:scale-110 transition-transform duration-300" />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col text-lg text-gray-800 leading-7 font-baloo">
                        <a href="tel:+917356324680" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">
                            +91 7356324680
                        </a>
                        <a href="tel:+917356524680" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">
                            +91 7356524680
                        </a>
                        <a href="mailto:hello@craftedlearn.com" className="text-gray-800 hover:text-orange-500 no-underline visited:text-gray-800 transition-colors duration-300">
                            hello@craftedlearn.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center mt-8 text-lg text-gray-500">
              Copyright  © {new Date().getFullYear()} Crafted. All rights reserved.
            </div>
        </section>
    );
};

export default Footer;