"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
export type RentalCarItemProps = {
  name: string;
  email: string;
  numberOfDays: number;
  numberOfCars: number;
  location: string;
  phoneNumber: string;
  companyName: string;
};

export function RentalCarItem() {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentalCarItemProps>();

  const onSubmit = async (FormData: RentalCarItemProps) => {
    // Convert the values to numbers if needed
    FormData.numberOfDays = Number(FormData.numberOfDays);
    FormData.numberOfCars = Number(FormData.numberOfCars);
    try {
      setLoading(true);

      const response = await fetch("/api/form/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        router.push("/homepage");
      } else {
        console.log("Fail to send the form");
      }
    } catch (error) {
      console.log("Error sending the data to prisma");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row"></div>
            <div>
              <label className="font-medium">Name</label>
              <input
                type="name"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
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
                  type="phoneNumber"
                  placeholder="+966 50 000-0000"
                  {...register("phoneNumber", { required: true })}
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Number of Days</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="eg. 5"
                  {...register("numberOfDays", { required: true })}
                  className="w-full pl-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Number of Cars</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="eg. 5"
                  {...register("numberOfCars", { required: true })}
                  className="w-full pl-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Location</label>
              <div className="relative mt-2">
                <div>
                  <select
                    {...register("location", { required: true })}
                    className="text-lg text-center h-full w-full pr-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  >
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
                type="companyName"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...register("companyName", { required: false })}
              />
            </div>
            {Loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" /> Submitting...
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={Loading}
                  className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                >
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
