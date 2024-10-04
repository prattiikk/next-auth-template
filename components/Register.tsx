"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

interface SignupInput {
    email: string;
    password: string;
}

const BACKEND_URL = "https://senpai-server.vercel.app/auth";

const Signup = () => {
    const router = useRouter();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/signup`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", JSON.stringify(jwt));
            router.push("/");
        } catch (e) {
            alert("Error while signing up");
        }
    }

    return (
        <div className="max-h-screen lg:h-screen flex justify-center flex-col">
            <div className="flex justify-center mt-28 lg:mt-0">
                <div>
                    <div className="text-3xl w-full font-extrabold">
                        Signup here....
                    </div>
                    <div className="px-0 w-full">
                        <div className="text-slate-500">
                            Already have an account?
                            <Link className="pl-2 underline" href="/auth/signin">
                                Sign in
                            </Link>
                        </div>
                    </div>

                    <div className="pt-8">
                        <LabelledInput
                            label="Email"
                            placeholder="harrypotter@gmail.com"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value,
                                });
                            }}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="DobbyIsFree"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value,
                                });
                            }}
                        />
                        <button
                            onClick={sendRequest}
                            type="button"
                            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    type,
}: LabelledInputType) {
    return (
        <div className="w-[350px]">
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default Signup;