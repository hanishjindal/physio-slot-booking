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
        const { day, slot, physio, patient }: { day: string, slot: string, physio: string, patient: string } = reqBody;

        if (!user || user.role !== 'SALES') {
            resp.message = "Unauthorized"
            return new NextResponse(JSON.stringify(resp), { status: 400 });
        }

        if (!day || !slot || !physio || !patient) {
            resp.message = 'Missing  info'
            return new NextResponse(JSON.stringify(resp), { status: 400 })
        }

        let physioData = await prisma.slots.findFirst({
            where: {
                isActive: true,
                name: physio
            }
        })

        if (!physioData) {
            resp.message = "Not found"
            return NextResponse.json(resp)
        }

        let availableSlots = JSON.parse(physioData.availableSlots);
        let bookedSlots = JSON.parse(physioData.bookedSlots);

        availableSlots[day].splice(availableSlots[day].indexOf(slot), 1);

        if (Array.isArray(bookedSlots[day])) {
            if (!bookedSlots[day].includes(slot)) {
                bookedSlots[day] = [...bookedSlots[day], slot]
            }
        } else {
            bookedSlots[day] = [slot];
        }

        await prisma.slots.update({
            where: {
                email: physioData.email
            },
            data: {
                bookedSlots: JSON.stringify(bookedSlots),
                availableSlots: JSON.stringify(availableSlots)
            }
        })

        let physioSlots = await prisma.slots.findMany({
            where: {
                isActive: true
            }
        })

        resp.message = 'Booked...';
        resp.success = true;
        resp.data = physioSlots;

        const response = NextResponse.json(resp);
        return response;

    } catch (error: any) {
        resp.message = error.message
        return NextResponse.json(resp, { status: 500 })
    }
}
