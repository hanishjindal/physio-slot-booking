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
        const { day, slot }: { day: string, slot: string[] } = reqBody;

        if (!day || !slot) {
            resp.message = 'Missing  info'
            return new NextResponse(JSON.stringify(resp), { status: 400 })
        }

        if (!user || user.role !== 'PHYSIO') {
            resp.message = "Unauthorized"
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        let physioSlots = await prisma.slots.findUnique({
            where: {
                isActive: true,
                userId: user.id,
                email: user.email
            }
        })

        if (!physioSlots) {
            resp.message = "Not found"
            return NextResponse.json(resp)
        }

        let slotData = JSON.parse(physioSlots.availableSlots);
        slotData[day] = slot;

        const updatedData = await prisma.slots.update({
            where: {
                isActive: true,
                userId: user.id,
                email: user.email
            },
            data: {
                availableSlots: JSON.stringify(slotData)
            }
        })

        resp.message = 'Updated Successfully...';
        resp.success = true;
        resp.data = updatedData;

        const response = NextResponse.json(resp);
        return response;

    } catch (error: any) {
        resp.message = error.message
        return NextResponse.json(resp, { status: 500 })
    }
}
