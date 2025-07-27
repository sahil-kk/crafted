import React, { useState } from "react";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {
    getFirestore,
    collection,
    addDoc,
    Timestamp,
} from "firebase/firestore";
import { app } from "../firebase";

const storage = getStorage(app);
const db = getFirestore(app);

export default function AnswerUpload() {
    const [formData, setFormData] = useState({ name: "", class: "" });
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Time check logic
    const now = new Date();
    const currentHour = now.getHours();
    let statusMessage = "";
    let isUploadDisabled = true;

    if (currentHour >= 10 && currentHour < 12) {
        statusMessage = (
            <div className="text-2xl text-slate-900 font-mono">
                Late submission: Better late than never.<br />We believe in second chances.
            </div>
        );
        isUploadDisabled = false;
    } else if (currentHour === 9) {
        statusMessage = (
            <div className="text-2xl text-slate-900 font-mono">
                Let's see what you've got
            </div>
        );
        isUploadDisabled = false;
    } else if (currentHour === 8) {
        statusMessage = (
            <div className="text-2xl text-slate-900 font-mono">
                Gear up. The battle of brains is almost here.
            </div>
        );
    } else {
        statusMessage = (
            <div className="text-2xl text-slate-900 font-mono">
                Get back to the grind!
            </div>
        );
    }

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
                uploadedAt: Timestamp.now(),
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
        <section
            className="relative bg-white bg-cover bg-center bg-no-repeat px-6 pb-12 min-h-screen"
            style={{ backgroundImage: "url('/images/bgpattern.svg')" }}
        >
            <div className="flex justify-center md:justify-start px-4 mb-4 mt-4">
                <img src="/images/logonew.svg" alt="Crafted" className="h-10 w-auto md:h-16" />
            </div>
            <div className="max-w-2xl mx-auto text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-baloo">
                    Weekly <span className='text-orange-500'>Exam</span>
                </div>

                <p className="text-gray-600 text-lg mb-4">{statusMessage}</p>

                <form
                    onSubmit={handleUpload}
                    className="bg-white shadow-lg mt-16 p-6 rounded-xl space-y-6 text-left"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        disabled={isUploadDisabled}
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none disabled:bg-gray-200"
                    />

                    <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        disabled={isUploadDisabled}
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none text-black disabled:bg-gray-200"
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
                        disabled={isUploadDisabled}
                        className="w-full bg-white border px-4 py-3 rounded-full outline-none disabled:bg-gray-200"
                    />

                    <button
                        type="submit"
                        disabled={uploading || isUploadDisabled}
                        className={`w-full font-bold py-3 rounded-full transition ${
                            isUploadDisabled
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                    >
                        {uploading ? "Uploading..." : "Submit Answer"}
                    </button>
                </form>
            </div>
        </section>
    );
}