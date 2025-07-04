const Footer = () => {
    return (
        <section className="bg-white text-black mb-16 mt-16 px-6  ">
            <div className="max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* 1. Logo & Tagline */}
                <div>
                    <img src="images/header-logo.svg" alt="Crafted Logo" className="h-10 ml-20 mb-3" />
                    <p className="text-lg  text-gray-600">Crafted supports students from Classes 8 to 12 with structured prep for boards, JEE, NEET, and foundations. With expert guidance and smart tools, students learn better, stay consistent, and achieve more.</p>
                </div>

                {/* 2. Explore */}
                <div>
                    <h4 className="text-2xl text-orange-500 font-semibold ml-9 mb-4 ">Explore</h4>
                    <ul className="space-y-4 font-semibold font-baloo text-xl">
                        <li><a href="#courses" className="text-black hover:text-orange-500">Courses</a></li>
                        <li><a href="#team" className="text-black hover:text-orange-500">Our Team</a></li>
                        <li><a href="#contact" className="text-black hover:text-orange-500">Contact Us</a></li>
                    </ul>
                </div>

                {/* 3. Support */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4 ml-9 text-orange-500">Support</h4>
                    <ul className="space-y-4 font-semibold font-baloo text-xl">
                        <li><a href="/privacy" className="text-black hover:text-orange-500">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-black hover:text-orange-500">Terms & Conditions</a></li>
                        <li><a href="/faq" className="text-black hover:text-orange-500">FAQs</a></li>
                    </ul>
                </div>



                {/* 4. Follow Us */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4 ml-9 text-orange-500">Follow Us</h4>
                    <div className="ml-20 flex gap-6 text-white text-xl">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/crafted.learninghub?igsh=bms4N2oxNHYyYXdn"
                            className="hover:text-orange-500 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-10 h-10 text-black dark:text-black" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd"
                                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                      clip-rule="evenodd"/>
                            </svg>

                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/company/crafted-learning-hub/"
                            className="hover:text-orange-500 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                      clip-rule="evenodd"/>
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                            </svg>

                        </a>

                        {/* YouTube */}
                        <a
                            href=""
                            className="hover:text-orange-500 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-10 h-10 text-black dark:text-grey" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                      clip-rule="evenodd"/>
                            </svg>

                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center ml-32 mt-8 text-lg text-gray-500">
                Copyright © {new Date().getFullYear()} Crafted. All
                rights reserved.
            </div>
        </section>
    );
};

export default Footer;