import { NextRequest, NextResponse } from "next/server"
import prisma from "@/libs/prismadb";
import { getDataFromToken } from "@/helpers/getDataFromToken";

const resp: any = {
    message: "",
    success: false,
    data: {}
}

export async function POST(request: NextRequest) {
    try {
        const user = await getDataFromToken(request);
        const reqBody = await request.json();

        if (!user || user.role === 'PHYSIO') {
            resp.message = "Unauthorized"
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        let physioSlots = await prisma.slots.findMany({
            where: {
                isActive: true
            }
        })

        if (!physioSlots || !Array.isArray(physioSlots)) {
            resp.message = "Not found"
            return NextResponse.json(resp)
        }

        resp.message = 'Data Loaded';
        resp.success = true;
        resp.data = physioSlots;

        const response = NextResponse.json(resp);
        return response;

    } catch (error: any) {
        resp.message = error.message
        return NextResponse.json(resp, { status: 500 })
    }
}
