"use client"
import { prisma } from "@/db"

export async function SendCarFakeData()
{
    await prisma.car.create({ data: { name: "Toyota Camry", pricePerDay: 1000, location: "Riyadh",  } });
    await prisma.car.create({ data: { name: "McLaren 720S", pricePerDay: 1000, location: "Jeddah",  } });
    await prisma.car.create({ data: { name: "BMW M3", pricePerDay: 1000, location: "Tabuk",  } });
    await prisma.car.create({ data: { name: "Mercedes-Benz S-Class", pricePerDay: 1000, location: "Riyadh",  } });
    await prisma.car.create({ data: { name: "Ford Mustang", pricePerDay: 1000, location: "Jeddah",  } });
    await prisma.car.create({ data: { name: "Audi A4", pricePerDay: 1000, location: "Riyadh",  } });
    await prisma.car.create({ data: { name: "Lamborghini Huracan", pricePerDay: 1000, location: "Jeddah",  } });
    await prisma.car.create({ data: { name: "Honda Civic", pricePerDay: 1000, location: "Riyadh",  } });
    await prisma.car.create({ data: { name: "Porsche 911", pricePerDay: 1000, location: "Jeddah",  } });
    await prisma.car.create({ data: { name: "Chevrolet Camaro", pricePerDay: 1000, location: "Tabuk",  } });
    console.log("Done!")
}
