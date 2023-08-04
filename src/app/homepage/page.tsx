/* eslint-disable @next/next/no-async-client-component */
import { prisma } from "@/db";
import Link from "next/link";

const HomePage = async () => {
  const LastCustomerDetails = await prisma.rentalCar.findMany(
    // Selecting the last row from the table
    {
      orderBy: {
        id: "desc",
      },
      take: 1,
    }
  );
  const Customer_ID = LastCustomerDetails.map((car) => car.id);
  const Customer_location = LastCustomerDetails.map((car) => car.location);
  const Customer_NumberOfDays = LastCustomerDetails.map(
    (car) => car.numberOfDays
  );
  // console.log("LastCustomerDetails", Customer_location);
  const RequiredCars = await prisma.car.findMany({
    where: {
      location: Customer_location[0],
    },
  });

  // Calculate the discounted prices for the cars
  const updatedCars = RequiredCars.map((car) => {
    const pricePerDay = car.location === "Riyadh" ? 1500 : car.pricePerDay * 2;
    const discountedPrice =
      Number(Customer_NumberOfDays) > 3
        ? (Number(Customer_NumberOfDays) - 3) * 0.8 * pricePerDay +
          3 * pricePerDay
        : Number(Customer_NumberOfDays) * pricePerDay;

    return {
      ...car,
      pricePerDay,
      discountedPrice,
    };
  });

  // Update the cars with the calculated prices

  // const UpdatedPrices = await prisma.car.updateMany({
  //   where: {
  //     rentalCarId: Customer_ID[0],
  //   },
  //   data: updatedCars,
  // });
  console.log(updatedCars);

  return (
    <>
      <div>
        <div className="items-start justify-between sm:flex">
          <div>
            <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl">
              Welcome to homepage
            </h1>
          </div>
          <div>
            <Link
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              href="/"
            >
              Go back to Form
            </Link>
          </div>
        </div>
        <p className="text-gray-800 text-xl font-extrabold mt-3 mb-3">
          List of Cars:
        </p>

        <ul>
          {updatedCars.map((car) => (
            <li className="border rounded-lg mb-4" key={car.id}>
              <div className="flex items-start justify-between p-4 ">
                <div className="space-y-2">
                  <h4 className="text-gray-800 font-semibold">
                    Car: {car.name}
                  </h4>
                  <p>Price Per Day: {car.pricePerDay} SAR</p>
                  <p>Location {car.location}</p>
                  <p>Discounted Price: {car.discountedPrice} SAR</p>
                </div>
                <button className="text-white text-sm bg-green-700 border rounded-lg px-3 py-2 duration-150 hover:bg-green-100">
                  Rent
                </button>

                {/* Add other car details you want to display */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
