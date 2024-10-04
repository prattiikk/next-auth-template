"use client";
import React from 'react';
import { redirect, useRouter } from 'next/navigation';
import { signup } from "@/app/actions/signupAction"; // Import the signup function
import { signIn } from 'next-auth/react';
import { auth } from '../auth';

const SignupPage = () => {
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const result = await signup(formData);

        if (result === true) {
            router.push('/login'); // Redirect to login page after signup
        } else {
            alert(result); // Simple alert for demonstration
        }
    };

    const handleGoogleLogin = async () => {
        await signIn("google"); // Trigger NextAuth Google sign-in
    };

    const handleGitHubLogin = async () => {
        await signIn("github"); // Trigger NextAuth GitHub sign-in
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-md bg-white p-4">
                <h1 className="text-3xl text-black font-semibold tracking-tight "> Your Thoughts, Our Terminal. </h1>
                <p className="text-3xl text-neutral-400 font-semibold mb-6 tracking-tight">
                    <span className='text-black'>Create</span> your Terminal-notes account.
                </p>

                {/* <p className="text-gray-600 text-center">Create a new account</p> */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="text-black font-medium rounded-xl p-2 border-2 hover:bg-stone-100"
                    >
                        Continue with Google
                    </button>
                    <button
                        type="button"
                        onClick={handleGitHubLogin}
                        className=" text-black font-medium rounded-xl p-2 border-2 hover:bg-stone-100"
                    >
                        Continue with GitHub
                    </button>
                    <span className=" border-b-2 w-full my-2"></span>

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="border border-gray-300 text-black rounded-xl p-2 px-4 focus:border-black focus:ring-black"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="border border-gray-300 text-black rounded-xl p-2 px-4 focus:border-black focus:ring-black"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full border border-black bg-gray-800 hover:bg-gray-950 text-white rounded-xl p-2">
                        Create account
                    </button>
                </form>
                <div className="flex flex-col gap-4 items-center mt-4">

                    <a href="/login" className="text-black hover:underline">
                        Already have an account? Log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;