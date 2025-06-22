export default function Courses() {
    const features = [
        "Personalized Plans",
        "Customizable Pricing",
        "Weak Area Focus",
        "Subject-based Coverage",
        "Anytime Tutor Support",
        "Student Monitoring"
    ];

    return (
        <section id="courses" className=" border border-red-500 py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800"><br/>Our Courses</h2>
                <p className="text-gray-600 mt-2">Personalized education that fits every child’s educational needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {features.map((feature, i) => (
                    <div key={i} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-xl text-purple-600">{feature}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}