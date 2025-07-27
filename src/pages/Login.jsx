import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN = {
    username: "admin",
    password: "crafted123"
};

export default function Login() {
    const [input, setInput] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (
            input.username === ADMIN.username &&
            input.password === ADMIN.password
        ) {
            localStorage.setItem("isAdmin", "true");
            navigate("/TestDashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <form className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-full max-w-sm" onSubmit={handleLogin}>
                <h2 className="text-2xl text-center font-bold">Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded"
                    value={input.username}
                    onChange={(e) => setInput({ ...input, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}