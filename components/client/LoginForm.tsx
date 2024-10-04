"use client";

import { signIn } from "next-auth/react"; // Import NextAuth's signIn method
import { useRouter } from "next/navigation";
import { Login } from "@/app/actions/formActions";

const Loginform = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        await signIn("google"); // Trigger NextAuth Google sign-in
    };

    const handleGitHubLogin = async () => {
        await signIn("github"); // Trigger NextAuth GitHub sign-in
    };

    return (
        <div className="flex flex-col items-center">

            <form
                action={async (formData) => {
                    const email = formData.get('email') as string;
                    const password = formData.get('password') as string;

                    if (!email || !password) {
                        console.error("Please provide all fields!");
                        return;
                    }

                    const error = await Login(email, password);
                    if (!error) {
                        router.refresh();
                    } else {
                        console.error(String(error));
                    }
                }}
                className='flex flex-col gap-4 w-full max-w-md'
            >
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
                    className="rounded-xl text-black placeholder-gray-200 p-2 px-4  w-full h-12"
                    style={{ backgroundColor: 'transparent', border: '1px solid gray' }} // Set the background to transparent
                    type="email"
                    placeholder='Email'
                    name='email'
                    required
                />
                <input
                    className="rounded-xl text-black placeholder-gray-200 p-2 px-4 w-full h-12"
                    style={{ backgroundColor: 'transparent', border: '1px solid gray' }} // Set the background to transparent
                    type='password'
                    placeholder='Password'
                    name='password'
                    required
                />
                <button className="bg-black text-white hover:bg-gray-800 rounded-xl p-2" type='submit'>
                    Login
                </button>
            </form>
        </div>
    );
}

export { Loginform };