import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="bg-white rounded-md p-3">Welcome to Car Rental</h1>
        <Link href="/Login" className="bg-white rounded-md p-3">
          Login
        </Link>
      </header>

      {/* Button if user is new */}

      {/* Button if its a n old user */}
    </>
  );
}
