import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import { app } from "../firebase";

const storage = getStorage(app);
const db = getFirestore(app);

export default function AnswerUpload() {
    const [formData, setFormData] = useState({ name: "", class: "" });
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.class || !file) {
            alert("Please fill all fields and select a file.");
            return;
        }

        setUploading(true);

        try {
            const fileRef = ref(storage, `answers/${Date.now()}_${file.name}`);
            await uploadBytes(fileRef, file);
            const fileURL = await getDownloadURL(fileRef);

            await addDoc(collection(db, "answers"), {
                name: formData.name,
                class: formData.class,
                fileURL,
                uploadedAt: Timestamp.now()
            });

            alert("Uploaded successfully!");
            setFormData({ name: "", class: "" });
            setFile(null);
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Upload failed. Try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <section className="bg-white py-24 px-6 min-h-screen">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 font-baloo">
                    Upload Your Answer Sheet
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Enter your details and upload your answer sheet below.
                </p>

                <form
                    onSubmit={handleUpload}
                    className="bg-gray-50 shadow-md p-6 rounded-xl space-y-6 text-left"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none"
                    />

                    <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none text-black"
                    >
                        <option value="">Select Class</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                    </select>

                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFile}
                        required
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none"
                    />

                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition"
                    >
                        {uploading ? "Uploading..." : "Submit Answer"}
                    </button>
                </form>
            </div>
        </section>
    );
}