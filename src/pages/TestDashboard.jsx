import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

const classOptions = ["8", "9", "10", "11", "12"];

export default function TestDashboard() {
    const [uploads, setUploads] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [marks, setMarks] = useState({});

    useEffect(() => {
        const fetchUploads = async () => {
            const snapshot = await getDocs(collection(db, "answers"));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUploads(data);
        };

        fetchUploads();
    }, []);

    const handleMarkChange = (id, value) => {
        setMarks(prev => ({ ...prev, [id]: value }));
    };

    const saveMark = async (id) => {
        try {
            const ref = doc(db, "answers", id);
            await updateDoc(ref, { mark: marks[id] });
            alert("Mark saved!");
        } catch (err) {
            console.error("Error updating mark:", err);
        }
    };

    const filteredUploads = selectedClass
        ? uploads.filter(item => item.class === selectedClass)
        : [];

    return (
        <section className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 font-baloo">
                    Answer Sheet Dashboard
                </h1>

                {!selectedClass ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {classOptions.map(cls => (
                            <div
                                key={cls}
                                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                <div className="bg-gradient-to-br from-orange-100 to-white px-6 py-8 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Class {cls}</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        View uploaded answers from students of Class {cls}.
                                    </p>
                                    <button
                                        onClick={() => setSelectedClass(cls)}
                                        className="border border-gray-800 text-gray-800 font-semibold px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
                                    >
                                        View Answers
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={() => setSelectedClass(null)}
                            className="mb-6 bg-gray-100 border px-4 py-2 rounded-full hover:bg-gray-200"
                        >
                            ← Back to Classes
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-gray-700">
                            Answers - Class {selectedClass}
                        </h2>

                        <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl shadow-md">
                            <table className="w-full table-auto border-collapse text-left text-gray-800">
                                <thead>
                                <tr className="bg-orange-100 text-gray-700">
                                    <th className="py-3 px-4">#</th>
                                    <th className="py-3 px-4">Name</th>
                                    <th className="py-3 px-4">Class</th>
                                    <th className="py-3 px-4">Uploaded At</th>
                                    <th className="py-3 px-4">File</th>
                                    <th className="py-3 px-4">Mark</th>
                                    <th className="py-3 px-4">✔️</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredUploads.map((item, idx) => (
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
                                        <td className="py-3 px-4">
                                            <input
                                                type="text"
                                                value={marks[item.id] || item.mark || ""}
                                                onChange={(e) => handleMarkChange(item.id, e.target.value)}
                                                className="border px-2 py-1 rounded w-20"
                                            />
                                        </td>
                                        <td className="py-3 px-4">
                                            <button
                                                onClick={() => saveMark(item.id)}
                                                className="text-green-600 hover:text-green-800 text-xl"
                                            >
                                                ✔️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {filteredUploads.length === 0 && (
                                <p className="text-center text-gray-500 py-6">No uploads found.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}