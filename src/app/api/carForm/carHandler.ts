import { prisma } from "@/db";

export async function handleCarRequest(
    name: string,
    email: string,
    numberOfDays: number,
    numberOfCars: number,
    location: string,
    phoneNumber: string | null,
    companyName: string | null
  ) {
    const rentalCar = await prisma.rentalCar.create({
      data: {
        name,
        email,
        numberOfDays,
        numberOfCars,
        location,
        phoneNumber,
        companyName,
      },
      include: {
        cars: true, // Include the associated cars in the response
      },
    });
  
    // Get all cars that fit the requirements
    const cars = await prisma.car.findMany({
      where: {
        location: location,
      },
    });
  
    // Calculate the discounted prices for the cars
    const updatedCars = cars.map((car) => {
      const pricePerDay = car.location === "Riyadh" ? 1500 : car.pricePerDay * 2;
      const discountedPrice =
        numberOfDays > 3
          ? (numberOfDays - 3) * 0.8 * pricePerDay + 3 * pricePerDay
          : numberOfDays * pricePerDay;
  
      return {
        ...car,
        pricePerDay,
        discountedPrice,
      };
    });
  
    // Update the cars with the calculated prices
    await prisma.car.updateMany({
      where: {
        rentalCarId: rentalCar.id,
      },
      data: updatedCars,
    });
  
    console.log(updatedCars);
  
    return { rentalCar, cars: updatedCars };
  }