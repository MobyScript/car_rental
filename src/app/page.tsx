/* eslint-disable @next/next/no-async-client-component */

import { RentalCarItem } from "@/components/RentalCarItems";
import { prisma } from "@/db";

function getRentalCar() {
  return prisma.rentalCar.findMany();
}

export default async function Home() {
  const rentalCar = await getRentalCar();
  return (
    <>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">Rent a Car !</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              {`Let's Get started`}
            </p>
            <p>Please fill out the form so we can find the best car for you!</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form className="space-y-5">
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row"></div>
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>SA</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+966 50 000-0000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Number of Days</label>
                <div className="relative mt-2">
                  <input
                    type="number"
                    placeholder="eg. 5"
                    required
                    className="w-full pl-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Number of Cars</label>
                <div className="relative mt-2">
                  <input
                    type="number"
                    placeholder="eg. 5"
                    required
                    className="w-full pl-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium">Location</label>
                <div className="relative mt-2">
                  <div>
                    <select className="text-lg text-center h-full w-full pr-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                      <option>Riyadh</option>
                      <option>Jeddah</option>
                      <option>Tabuk</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="font-medium">Company Name</label>
                <input
                  type="email"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
