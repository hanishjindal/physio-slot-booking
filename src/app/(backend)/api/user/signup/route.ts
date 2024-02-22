import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import prisma from "@/libs/prismadb";

const resp: any = {
    message: "",
    success: false,
    data: {}
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, password, role } = reqBody;

        if (!email || !name || !password || !role) {
            resp.message = 'Missing  info'
            return new NextResponse(JSON.stringify(resp), { status: 400 })
        }

        // Validate email format using regex
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!email || !emailRegex.test(email)) {
            resp.message = 'Invalid email format'
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        const checkUser = await prisma.user.findFirst({
            where: {
                email
            },
        });

        if (checkUser) {
            resp.message = `Account already exist`;
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                name: name.trim(),
                hashedPassword,
                role
            }
        });

        if (role === "PHYSIO") {
            await prisma.slots.create({
                data: {
                    userId: user.id,
                    email: email.toLowerCase(),
                    name: user.name
                }
            });
        }

        resp.message = "User successfully created"
        resp.success = true
        resp.data = user
        return NextResponse.json(resp)

    } catch (error: any) {
        resp.message = error.message
        return NextResponse.json(resp, { status: 500 })
    }
}