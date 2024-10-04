import React from 'react';
import Link from 'next/link';
import { Loginform } from '@/components/client/LoginForm';
import { auth, signIn } from '../auth';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    const session = await auth();
    if (session?.user) redirect("/");

    return (
        <div className="flex justify-center items-center h-screen bg-white">

            <div className="w-full max-w-md bg-white p-4">
                <h1 className="text-3xl text-black font-semibold tracking-tight "> Your Thoughts, Our Terminal. </h1>
                <p className="text-3xl text-neutral-400 font-semibold mb-6 tracking-tight">
                    <span className='text-black'>Login</span> to Terminal-notes.
                </p>
                {/* <h2 className="text-2xl font-bold text-black">Login</h2> */}
                {/* <p className="text-gray-600">Please enter your credentials to log in</p> */}
                <div className="mt-4">
                    <Loginform />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {/* <span className="text-center text-gray-600">or</span> */}
                    <Link href={"/signup"} className="text-center text-black hover:underline">
                        Don’t have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;