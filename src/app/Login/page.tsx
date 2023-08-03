"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [clicked, setClicked] = useState(true);

  return clicked ? <>{Login()}</> : <>{SignUP_Form()}</>;
  function Login() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <form className="m-4 p-20 bg-white rounded-lg relative w-96 ">
            <h1>Welcome back !</h1>
            <div className="relative z-0 mb-6 group">
              <input
                type="Username"
                className="border-blue-600 border-2 rounded-md p-2 w-auto"
                placeholder="Username"
                required
              />
            </div>

            <div className="relative z-0 mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="border-blue-600 border-2 rounded-md p-2 w-auto"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-4  ">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // onclick to Bookings.tsx
                onClick={() => null}
              >
                Login
              </button>
              <button
                type="submit"
                formNoValidate
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setClicked(false)}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  function SignUP_Form() {
    return (
      <>
        <header className="bg-white rounded-md p-3">
          Sing Up |{" "}
          <Link className="bg-white rounded-md p-3" href="./">
            Home
          </Link>
        </header>
        {/* Login Form */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <form className="m-4 p-20 bg-white rounded-lg relative w-auto ">
            <div className="relative z-0  mb-6 group">
              <input
                type="email"
                className="border-blue-600 border-2 rounded-md p-2 w-auto"
                placeholder="Email address"
                required
              />
            </div>
            <div className="relative z-0  mb-6 group">
              <input
                type="password"
                className="border-blue-600 border-2 rounded-md p-2 w-auto"
                placeholder="Password"
                required
              />
            </div>
            <div className="relative z-0  mb-6 group">
              <input
                type="ConfirmPassword"
                className="border-blue-600 border-2 rounded-md p-2 w-auto"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0  mb-6 group">
                <input
                  type="text"
                  className="border-blue-600 border-2 rounded-md p-2 w-auto"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="relative z-0  mb-6 group">
                <input
                  type="text"
                  className="border-blue-600 border-2 rounded-md p-2 w-auto"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0  mb-6 group">
                <input
                  type="tel"
                  className="border-blue-600 border-2 rounded-md p-2 w-auto"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            {/* Buttons */}

            <div className="flex items-center mb-4">
              <button
                type="submit"
                className="text-white mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => alert("clicked")}
              >
                Submit
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setClicked(true)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
