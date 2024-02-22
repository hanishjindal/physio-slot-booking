import { NextRequest, NextResponse } from "next/server"
import prisma from "@/libs/prismadb";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { User } from "@prisma/client";

const resp: any = {
    message: "",
    success: false,
    data: {}
}

export async function POST(request: NextRequest) {
    try {
        const user = await getDataFromToken(request);
        const reqBody = await request.json();

        if (!user || user.role !== 'SALES') {
            resp.message = "Unauthorized"
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        let userList: User[] = await prisma.user.findMany({
            where: {
                isActive: true,
                role: "USER"
            }
        })

        if (!userList || !Array.isArray(userList)) {
            resp.message = "Not found"
            return NextResponse.json(resp)
        }

        const filteredList = [];

        resp.message = 'Data Loaded';
        resp.success = true;
        resp.data = userList;

        const response = NextResponse.json(resp);
        return response;

    } catch (error: any) {
        resp.message = error.message
        return NextResponse.json(resp, { status: 500 })
    }
}
