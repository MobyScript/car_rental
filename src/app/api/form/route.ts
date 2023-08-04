import { prisma } from "@/db";
import { NextResponse, NextRequest } from "next/server";
import { SendCarFakeData } from "../carForm/sendCarData";



export async function POST(request: NextRequest): Promise<NextResponse<unknown>> {
  try {
    // SendCarFakeData();
    const { name, email, numberOfDays, numberOfCars, location, phoneNumber, companyName } = await request.json();

    const submission = await prisma.rentalCar.create({
      data: {
        name,
        email,
        numberOfDays,
        numberOfCars,
        location,
        phoneNumber,
        companyName,
      },
    });

    return new NextResponse(JSON.stringify({ submission }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}
