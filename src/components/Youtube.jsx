export default function Youtube() {
    return (
        <section id="youtube" className="bg-white py-6 px-6">
            <div
                className=" max-w-7xl mx-auto bg-slate-900 min-h-[350px] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row md:text-2xl justify-between items-center text-white shadow-sm">
                <h2 className="text-[32px] font-bold leading-normal mb-4 md:mb-0 text-center md:text-left">
                    Learn with fun. Check out<br/>
                    <span className="text-orange-500">Crafted</span> YouTube Channel
                </h2>
                <a
                    href="https://www.youtube.com/@yourchannel" // Replace with actual channel link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-400 text-white px-11 py-[25px] rounded-[23px] font-semibold transition"
                >
                    <span className="text-white text-[23px]">YouTube</span>
                </a>
            </div>
        </section>
    );
}