import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TestDashboard() {
    const [uploads, setUploads] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const adminUser = {
        username: "admin@crafted",
        password: "std.answers.247",
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (
            credentials.username === adminUser.username &&
            credentials.password === adminUser.password
        ) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            const fetchUploads = async () => {
                const snapshot = await getDocs(collection(db, "answers"));
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setUploads(data);
            };
            fetchUploads();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            className="w-full px-4 py-3 border rounded-full outline-none"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            className="w-full px-4 py-3 border rounded-full outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 font-baloo">
                    Uploaded Answers Dashboard
                </h1>

                <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl shadow-md">
                    <table className="w-full table-auto border-collapse text-left text-gray-800">
                        <thead>
                        <tr className="bg-orange-100 text-gray-700">
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Class</th>
                            <th className="py-3 px-4">Uploaded At</th>
                            <th className="py-3 px-4">File</th>
                        </tr>
                        </thead>
                        <tbody>
                        {uploads.map((item, idx) => (
                            <tr key={item.id} className="border-t hover:bg-orange-50">
                                <td className="py-3 px-4">{idx + 1}</td>
                                <td className="py-3 px-4">{item.name}</td>
                                <td className="py-3 px-4">{item.class}</td>
                                <td className="py-3 px-4">
                                    {item.uploadedAt?.toDate().toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                    <a
                                        href={item.fileURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {uploads.length === 0 && (
                        <p className="text-center text-gray-500 py-6">No uploads found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}