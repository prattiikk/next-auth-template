// app/actions/signupAction.ts
"use server";

import client from "@/db";
import { hash } from "bcryptjs";

export const signup = async (formData: FormData) => {
    try {
        const email = formData.get('email') as string | undefined;
        const password = formData.get('password') as string | undefined;

        if (!email || !password) {
            throw new Error("Please provide all fields!");
        }

        const user = await client.user.findFirst({ where: { email } });
        if (user) {
            throw new Error("User already exists!");
        }

        // const hashedPassword = await hash(password, 10);
        const hashedPassword = password
        await client.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        });

        return true; // Indicate success
    } catch (error: any) {
        console.error("Error during signup:", error.message);
        return error.message; // Return error message for feedback
    }
};