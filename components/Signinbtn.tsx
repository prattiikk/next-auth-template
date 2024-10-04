"use client";
import { useRouter } from "next/navigation";
import ShimmerButton from "./magicui/shimmer-button";

export default function SigninBtn() {
    const router = useRouter()
    return (
        <div>
            <ShimmerButton
                className="mt-16 px-8 py-4 shadow-2xl"
                onClick={() => {
                    console.log("hi there !")
                    router.push("/signup")
                }}
            >
                <span className="text-sm font-bold text-white">Register</span>
            </ShimmerButton>
        </div>
    );
}
