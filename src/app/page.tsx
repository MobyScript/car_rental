import Image from "next/image";
import Link from "next/link";
import CarImage from "../.././Images/Car1.avif";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="bg-white rounded-md p-3">Welcome to Car Rental</h1>
        <Link href="/Login" className="bg-white rounded-md p-3">
          Login
        </Link>
      </header>

      {/* Image spinning in the middle of the screen */}
      <div className="h-20 flex items-center justify-center bg-white ">
        <Image src={CarImage} alt={"Dodge Car"} className="h-40 w-40" />
      </div>
    </>
  );
}
