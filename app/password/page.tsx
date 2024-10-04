"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SetupPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        // Here, implement logic to save the password to the user account
        // This typically involves making an API call to update the user's password
        // await updatePassword(password); // Implement this function

        // Redirect to a success page or login page after successful update
        router.push("/login");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white text-black">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-1/3 h-1/2 p-6 rounded-lg">
                <h1 className="text-3xl w-full text-left font-medium tracking-tight mb-2">Set Your Password</h1>
                <p className="text-xl w-full text-gray-400 mb-4 text-left">
                    A password is required to access your terminal SSH client securely.
                </p>
                <span className="w-full border-b-2 my-4"></span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
                    required
                    className="mb-4 p-2 px-4 border-2 border-gray-300 rounded-xl w-full"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="mb-4 p-2 px-4 border-2 border-gray-300 rounded-xl w-full"
                />
                <button
                    type="submit"
                    className="bg-black text-white p-2 rounded-xl w-full hover:bg-blue-600 transition"
                >
                    Set Password
                </button>
            </form>
        </div>
    );
};

export default SetupPassword;