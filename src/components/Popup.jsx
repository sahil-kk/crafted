import { useState } from "react";

const Popup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        class: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            Status: "Didn't Contact"  // 👈 Add this key-value pair
        };

        await fetch("https://sheetdb.io/api/v1/5mjjekeiijb0q", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: dataToSend }),
        });

        localStorage.setItem("contactInfo", JSON.stringify(dataToSend));
        alert("Thanks for connecting!");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-6">
            <div className="bg-white w-full max-w-3xl sm:max-w-lg rounded-xl shadow-2xl flex flex-col md:flex-row animate-popup relative max-h-screen overflow-y-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
                >
                    ×
                </button>

                {/* Left Side */}
                <div className="bg-gradient-to-bl from-slate-800 to-orange-300 flex items-center justify-center p-8 md:w-1/2">
                    <img src="/images/mail2.svg" alt="Mail Icon" className="w-full" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 p-4 sm:p-6 md:p-8 space-y-3 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Get in touch</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder=" Name"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 px-4 py-3 shadow-md rounded-full outline-none"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder=" Phone"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 px-4 py-3 shadow-md rounded-full outline-none"
                    />

                    <div className="relative w-full">
                        <select
                            name="class"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 px-4 py-3 pr-10 shadow-md rounded-full outline-none text-gray-400 appearance-none"
                        >
                            <option value=""> Class</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06L10.53 12.3a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <textarea
                        name="message"
                        placeholder=" Message"
                        onChange={handleChange}
                        rows="3"
                        className="w-full bg-gray-100 px-4 py-3 shadow-md rounded-xl outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-slate-50 text-lg border-2 border-black font-bold w-full py-3 rounded-full text-slate-900 hover:bg-orange-400 hover:border-white hover:text-white transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;