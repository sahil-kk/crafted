import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const ADMIN_EMAIL = "admin@crafted.com"; // your only admin email

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email !== ADMIN_EMAIL) {
            alert("Access denied: Unauthorized user");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin(); // redirect to dashboard
        } catch (err) {
            alert("Login failed: " + err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4">
                <h2 className="text-2xl font-bold text-center text-gray-700">Admin Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-2 rounded"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                    Login
                </button>
            </form>
        </div>
    );
}