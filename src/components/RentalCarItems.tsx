import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

type RentalCarProps = {
  id: number;
  name: string;
  email: string;
  numberOfDays: number;
  numberOfCars: number;
  location: string;
  phoneNumber: string;
  companyName: string;
};

async function StoreRentalCar(data: FormData) {
  "use server";

  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const numberOfDays = parseInt(
    data.get("numberOfDays")?.toString() || "0",
    10
  );
  const numberOfCars = parseInt(
    data.get("numberOfCars")?.toString() || "0",
    10
  );
  const location = data.get("location")?.toString();
  const phoneNumber = data.get("phoneNumber")?.toString();
  const companyName = data.get("companyName")?.toString();

  if (!name || !email || !numberOfDays || !numberOfCars || !location) {
    throw new Error("Invalid form data");
  }

  await prisma.rentalCar.create({
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

  redirect("/bookings");
}

export function RentalCarItem({
  id,
  name,
  email,
  numberOfDays,
  numberOfCars,
  location,
  phoneNumber,
  companyName,
}: RentalCarProps) {
  return (
    <form
      // action={StoreRentalCar}
      className="m-4 p-14 bg-white rounded-lg relative w-96 "
    >
      <label htmlFor={`name_${id}`}>Name:</label>
      <input
        name="name"
        id={`name_${id}`}
        type="text"
        value={name}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
        required
      />

      <label htmlFor={`email_${id}`}>Email:</label>
      <input
        name="email"
        id={`email_${id}`}
        type="email"
        value={email}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
        required
      />

      <label htmlFor={`numberOfDays_${id}`}>Number of Days:</label>
      <input
        name="numberOfDays"
        id={`numberOfDays_${id}`}
        type="number"
        value={numberOfDays}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
        required
      />

      <label htmlFor={`numberOfCars_${id}`}>Number of Cars:</label>
      <input
        name="numberOfCars"
        id={`numberOfCars_${id}`}
        type="number"
        value={numberOfCars}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
        required
      />

      <label htmlFor={`location_${id}`}>Location:</label>
      <input
        name="location"
        id={`location_${id}`}
        type="text"
        value={location}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
        required
      />

      <label htmlFor={`phoneNumber_${id}`}>Phone Number:</label>
      <input
        name="phoneNumber"
        id={`phoneNumber_${id}`}
        type="text"
        value={phoneNumber}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
      />

      <label htmlFor={`companyName_${id}`}>Company Name:</label>
      <input
        name="companyName"
        id={`companyName_${id}`}
        type="text"
        value={companyName}
        className="border-blue-600 border-2 rounded-md p-2 w-full"
      />
      <div className="flex  justify-end m-2">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dar:bg-blue-600 "
          type="submit"
          formNoValidate
        >
          Rent !
        </button>
      </div>
    </form>
  );
}
