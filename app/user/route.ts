import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  const session = useSession();

  try {
    await client.user.create({
      data: {
        email: "test@gmail.com",
        password: "test",
      },
    });
    return NextResponse.json({
      session,
    });
  } catch {
    return NextResponse.json({ message: "error while signing up" });
  }
}
